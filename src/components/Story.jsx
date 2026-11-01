import SectionHeading from "./SectionHeading.jsx";

export default function Story({ milestones }) {
  return (
    <section className="section story-section" id="story">
      <div className="container">
        <SectionHeading
          eyebrow="A love that feels like home"
          title="Our story"
          description="Some of our favorite chapters, leading us to this one."
        />
        <div className="story-grid">
          {milestones.map((milestone, index) => (
            <article className="story-item" key={milestone.year}>
              <span className="story-marker">{String(index + 1).padStart(2, "0")}</span>
              <span className="story-year">{milestone.year}</span>
              <h3 className="font-display">{milestone.title}</h3>
              <p>{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
