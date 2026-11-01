import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

export default function RSVP() {
  const [attendance, setAttendance] = useState("attending");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section rsvp-section" id="rsvp">
      <div className="rsvp-decoration" aria-hidden="true">
        ✳
      </div>
      <div className="container rsvp-container">
        <SectionHeading
          eyebrow="Kindly reply by September 24"
          title="Will you join us?"
          description="Your presence would make our day even more special."
        />
        {submitted ? (
          <div aria-live="polite" className="rsvp-success" role="status">
            <span className="success-flower" aria-hidden="true">
              ✿
            </span>
            <h3 className="font-display">Thank you for letting us know!</h3>
            <p>
              We have your response. We cannot wait to celebrate this special
              day with you.
            </p>
            <button
              className="text-button"
              onClick={() => setSubmitted(false)}
              type="button"
            >
              Update your response
            </button>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>Full name <span aria-hidden="true">*</span></span>
              <input
                autoComplete="name"
                name="fullName"
                placeholder="Your name"
                required
              />
            </label>
            <fieldset className="form-field attendance-field">
              <legend>Will you be joining us? <span aria-hidden="true">*</span></legend>
              <div className="attendance-options">
                {[
                  ["attending", "Joyfully accepts"],
                  ["regret", "Regretfully declines"],
                ].map(([value, label]) => (
                  <label
                    className={`attendance-option${attendance === value ? " selected" : ""}`}
                    key={value}
                  >
                    <input
                      checked={attendance === value}
                      name="attendance"
                      onChange={() => setAttendance(value)}
                      type="radio"
                      value={value}
                    />
                    <span className="radio-dot" aria-hidden="true" />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            {attendance === "attending" && (
              <label className="form-field">
                <span>Number of guests <span aria-hidden="true">*</span></span>
                <select defaultValue="1" name="guestCount">
                  {[1, 2, 3, 4, 5].map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className="form-field">
              <span>A note for the happy couple <span className="optional">(optional)</span></span>
              <textarea
                name="wishes"
                placeholder="Share a wish, a memory, or just say hello…"
                rows="4"
              />
            </label>
            <button className="button button-gold rsvp-submit" type="submit">
              Send your reply <span aria-hidden="true">→</span>
            </button>
            <p className="form-note">
              This invitation form is a preview and does not send responses to
              the couple yet.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
