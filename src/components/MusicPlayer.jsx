import { useEffect, useRef, useState } from "react";

const melody = [392, 440, 523.25, 440, 349.23, 392, 523.25, 440, 392, 349.23, 392, 440];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const masterRef = useRef(null);
  const noteRef = useRef(0);

  useEffect(
    () => () => {
      window.clearInterval(intervalRef.current);
      audioRef.current?.close();
    },
    [],
  );

  async function toggleMusic() {
    if (isPlaying) {
      window.clearInterval(intervalRef.current);
      masterRef.current?.gain.setTargetAtTime(
        0,
        audioRef.current.currentTime,
        0.18,
      );
      setIsPlaying(false);
      return;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      throw new Error("Background music is not supported by this browser.");
    }

    const context = audioRef.current ?? new AudioContext();
    audioRef.current = context;
    await context.resume();

    if (!masterRef.current) {
      masterRef.current = context.createGain();
      masterRef.current.gain.value = 0;
      masterRef.current.connect(context.destination);
    }
    masterRef.current.gain.setTargetAtTime(0.13, context.currentTime, 0.8);

    const playNote = () => {
      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = melody[noteRef.current % melody.length];
      noteRef.current += 1;
      envelope.gain.setValueAtTime(0.0001, now);
      envelope.gain.exponentialRampToValueAtTime(0.5, now + 0.12);
      envelope.gain.exponentialRampToValueAtTime(0.0001, now + 1.65);
      oscillator.connect(envelope);
      envelope.connect(masterRef.current);
      oscillator.start(now);
      oscillator.stop(now + 1.7);
    };

    playNote();
    intervalRef.current = window.setInterval(playNote, 1_250);
    setIsPlaying(true);
  }

  return (
    <div className="music-player">
      <button
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={`music-button${isPlaying ? " is-playing" : ""}`}
        onClick={toggleMusic}
        type="button"
      >
        {isPlaying ? (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M9 5H6v14h3V5Zm9 0h-3v14h3V5Z" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m8 5 11 7-11 7V5Z" />
          </svg>
        )}
      </button>
      <span className="music-label">
        <span className="music-title">A little music</span>
        <span className="music-subtitle">
          {isPlaying ? "Now playing" : "Play our melody"}
        </span>
      </span>
      <span aria-hidden="true" className="music-equalizer">
        <i />
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}
