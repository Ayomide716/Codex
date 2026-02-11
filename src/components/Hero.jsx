function Hero() {
  return (
    <section className="hero container" id="explore">
      <div>
        <p className="eyebrow">For teens and young adults</p>
        <h1>From zero knowledge to real tech projects—one short lesson at a time.</h1>
        <p className="hero-copy">
          SkillSprint helps you learn web development, coding fundamentals, and practical
          problem-solving through bite-sized lessons, hands-on challenges, and mini projects.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Start learning now</button>
          <button className="btn btn-secondary">View curriculum</button>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Preview of personalized dashboard">
        <h2>Your Progress Dashboard</h2>
        <p>Level 5 • Front-End Explorer</p>
        <div className="meter">
          <div style={{ width: '76%' }} />
        </div>
        <div className="panel-row">
          <span>Weekly Goal</span>
          <strong>76%</strong>
        </div>
        <div className="panel-grid">
          <article>
            <h3>Next Challenge</h3>
            <p>Build a responsive product page.</p>
          </article>
          <article>
            <h3>Streak Status</h3>
            <p>🔥 14 days in a row</p>
          </article>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
