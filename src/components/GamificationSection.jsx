function GamificationSection() {
  return (
    <section className="section alt" id="gamification" aria-labelledby="gamification-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="gamification-title">Gamification that keeps consistency high</h2>
          <p>
            Earn badges, level up, and maintain streaks with rewards that celebrate effort and
            progress.
          </p>
        </div>

        <div className="card-grid two-up">
          <article className="card">
            <h3>Badges & Levels</h3>
            <div className="pill-row">
              <span className="pill">UI Explorer</span>
              <span className="pill">Challenge Crusher</span>
              <span className="pill">Debug Detective</span>
            </div>
            <p>Next unlock: Project Architect (complete 3 challenge sets).</p>
          </article>

          <article className="card">
            <h3>Daily Streak Mission</h3>
            <p>Complete at least one lesson + one challenge every day.</p>
            <div className="streak-box">
              <strong>Current streak: 14 days</strong>
              <small>Best streak: 21 days</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default GamificationSection;
