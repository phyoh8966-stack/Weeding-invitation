import EventDetails from "./components/EventDetails.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import RSVP from "./components/RSVP.jsx";
import Story from "./components/Story.jsx";
import { wedding } from "./data/wedding.js";

const navigation = [
  ["Our story", "#story"],
  ["The day", "#details"],
  ["Gallery", "#gallery"],
  ["RSVP", "#rsvp"],
];

export default function App() {
  return (
    <>
      <header className="site-header">
        <a aria-label="Phyo and Moe, home" className="brand font-display" href="#home">
          P <span>&amp;</span> M
        </a>
        <nav aria-label="Main navigation" className="site-nav">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-rsvp" href="#rsvp">
          RSVP <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main>
        <Hero wedding={wedding} />
        <div className="intro-note">
          <span className="intro-ornament" aria-hidden="true">
            ✳
          </span>
          <p>
            A new adventure begins
            <br />
            <em>and we would love for you to be there.</em>
          </p>
          <span className="intro-ornament" aria-hidden="true">
            ✳
          </span>
        </div>
        <Story milestones={wedding.story} />
        <EventDetails events={wedding.events} />
        <Gallery photos={wedding.gallery} />
        <RSVP />
      </main>
      <Footer wedding={wedding} />
      <MusicPlayer />
    </>
  );
}
