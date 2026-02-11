function LearningTracks({ tracks }) {
  return (
    <section className="section alt" aria-labelledby="tracks-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="tracks-title">Personalized learning tracks</h2>
          <p>
            Pick your path and follow a clear roadmap from beginner lessons to showcase-ready
            projects.
          </p>
        </div>
        <div className="card-grid three-up">
          {tracks.map((track) => (
            <article className="card" key={track.title}>
              <h3>{track.title}</h3>
              <ul>
                {track.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningTracks;
