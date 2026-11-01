import SectionHeading from "./SectionHeading.jsx";

function EventIcon({ name }) {
  if (name === "sun") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="6" />
        <path d="M16 3v4m0 18v4M3 16h4m18 0h4M6.8 6.8l2.8 2.8m12.8 12.8 2.8 2.8m0-18.4-2.8 2.8M9.6 22.4l-2.8 2.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="m16 3 2.9 9.1L28 9l-3.1 9.1L34 21l-9.1 2.9L28 33l-9.1-3.1L16 39l-2.9-9.1L4 33l3.1-9.1L-2 21l9.1-2.9L4 9l9.1 3.1L16 3Z" transform="translate(2 -5) scale(.9)" />
      <path d="M25 4v7m-3.5-3.5h7M7 22v6m-3-3h6" />
    </svg>
  );
}

export default function EventDetails({ events }) {
  return (
    <section className="section event-section" id="details">
      <div className="container">
        <SectionHeading
          eyebrow="Save the date"
          title="The celebration"
          description="It would mean the world to have you with us."
        />
        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-card-top">
                <span className="event-icon">
                  <EventIcon name={event.icon} />
                </span>
                <span className="eyebrow">{event.label}</span>
              </div>
              <h3 className="font-display">{event.title}</h3>
              <span className="event-divider" />
              <p className="event-time">{event.time}</p>
              <p className="event-venue">{event.venue}</p>
              <p className="event-address">{event.address}</p>
              <p className="event-description">{event.description}</p>
              <a
                className="map-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`}
                rel="noreferrer"
                target="_blank"
              >
                Open in Google Maps <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
