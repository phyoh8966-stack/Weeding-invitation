import SectionHeading from "./SectionHeading.jsx";

export default function Gallery({ photos }) {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="A few moments we treasure"
          title="Through our eyes"
          description="Little glimpses of the love and laughter that brought us here."
        />
        <div className="gallery-grid">
          {photos.map((photo) => (
            <figure className={`gallery-image ${photo.className}`} key={photo.src}>
              <img alt={photo.alt} loading="lazy" src={photo.src} />
            </figure>
          ))}
        </div>
        <p className="gallery-caption">And our favorite moment is still to come.</p>
      </div>
    </section>
  );
}
