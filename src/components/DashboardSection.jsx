function DashboardSection({ milestones }) {
  return (
    <section className="section container" id="dashboard" aria-labelledby="dashboard-title">
      <div className="section-heading">
        <h2 id="dashboard-title">Personalized dashboard and progress tracking</h2>
        <p>
          Monitor your growth with simple analytics, project progress bars, and a smart “next best
          lesson” feed.
        </p>
      </div>

      <div className="dashboard-layout">
        <div className="card stat-card">
          <h3>Weekly Snapshot</h3>
          <div className="stats-grid">
            {milestones.map((milestone) => (
              <div key={milestone.label}>
                <strong>{milestone.value}</strong>
                <span>{milestone.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Mini Project Pipeline</h3>
          <div className="progress-list">
            <div>
              <p>Portfolio Website</p>
              <div className="meter">
                <div style={{ width: '84%' }} />
              </div>
            </div>
            <div>
              <p>Quiz App</p>
              <div className="meter">
                <div style={{ width: '53%' }} />
              </div>
            </div>
            <div>
              <p>Study Planner</p>
              <div className="meter">
                <div style={{ width: '29%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;
