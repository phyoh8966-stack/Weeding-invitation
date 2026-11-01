import Countdown from "./Countdown.jsx";

function FloralMark() {
  return (
    <svg
      aria-hidden="true"
      className="floral-mark"
      fill="none"
      viewBox="0 0 90 90"
    >
      <path
        d="M45 6c5 12 7 19 0 27-7-8-5-15 0-27Zm0 78c-5-12-7-19 0-27 7 8 5 15 0 27ZM6 45c12-5 19-7 27 0-8 7-15 5-27 0Zm78 0c-12 5-19 7-27 0 8-7 15-5 27 0ZM17.4 17.4c12 4 18 7 20 18-11-2-14-8-20-18Zm55.2 55.2c-12-4-18-7-20-18 11 2 14 8 20 18Zm0-55.2c-4 12-7 18-18 20 2-11 8-14 18-20ZM17.4 72.6c4-12 7-18 18-20-2 11-8 14-18 20Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="45" cy="45" r="8" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export default function Hero({ wedding }) {
  return (
    <section className="hero" id="home">
      <div className="hero-photo" />
      <div className="hero-grain" />
      <div className="hero-content">
        <FloralMark />
        <p className="hero-kicker">Together with their families</p>
        <h1 className="font-display">
          Phyo <span>&amp;</span> Moe
        </h1>
        <p className="hero-full-names">
          {wedding.couple.firstName} <span>and</span>{" "}
          {wedding.couple.secondName}
        </p>
        <span className="hero-rule" />
        <p className="hero-invitation">joyfully invite you to celebrate their wedding</p>
        <p className="hero-date">
          <span>{wedding.dateLabel}</span>
          <span className="hero-date-dot">·</span>
          <span>{wedding.year}</span>
        </p>
        <a className="button button-outline" href="#details">
          Explore the invitation <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-side-note">A day to remember, a love to last</div>
      <div className="hero-scroll" aria-hidden="true">
        <span />
        Scroll to discover
      </div>
      <div className="hero-countdown">
        <p>Counting down to our forever</p>
        <Countdown date={wedding.date} />
      </div>
    </section>
  );
}
