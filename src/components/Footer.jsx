export default function Footer({ wedding }) {
  return (
    <footer className="footer">
      <span className="footer-flower" aria-hidden="true">
        ✿
      </span>
      <p className="font-display">
        Phyo <span>&amp;</span> Moe
      </p>
      <span className="footer-date">
        {wedding.dateLabel} <span>·</span> {wedding.year}
      </span>
      <span className="footer-love">Made with love, for the ones we love.</span>
    </footer>
  );
}
