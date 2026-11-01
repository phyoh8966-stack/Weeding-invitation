import { useEffect, useState } from "react";

const units = [
  ["days", 86_400_000],
  ["hours", 3_600_000],
  ["minutes", 60_000],
  ["seconds", 1_000],
];

function getTimeLeft(target) {
  let remaining = Math.max(0, target.getTime() - Date.now());
  const values = {};

  for (const [unit, milliseconds] of units) {
    values[unit] = Math.floor(remaining / milliseconds);
    remaining %= milliseconds;
  }

  return values;
}

export default function Countdown({ date }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(date));

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(date)), 1_000);
    return () => window.clearInterval(timer);
  }, [date]);

  return (
    <div
      aria-label="Countdown to the wedding"
      aria-live="off"
      className="countdown"
    >
      {units.map(([unit]) => (
        <div className="countdown-unit" key={unit}>
          <span className="countdown-number">
            {String(timeLeft[unit]).padStart(2, "0")}
          </span>
          <span className="countdown-label">{unit}</span>
        </div>
      ))}
    </div>
  );
}
