function CommunitySection({ discussions }) {
  return (
    <section className="section container" id="community" aria-labelledby="community-title">
      <div className="section-heading">
        <h2 id="community-title">Community support and peer learning</h2>
        <p>
          Collaborate with peers, ask questions, share your wins, and get feedback from mentors.
        </p>
      </div>

      <div className="community-layout">
        <div className="card">
          <h3>Active Discussions</h3>
          <ul className="discussion-list">
            {discussions.map((post) => (
              <li key={post.topic}>
                <div>
                  <p>{post.topic}</p>
                  <small>{post.replies} replies</small>
                </div>
                <span>{post.tag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Community Rooms</h3>
          <div className="pill-row">
            <span className="pill">Beginner Help</span>
            <span className="pill">Web Dev Projects</span>
            <span className="pill">Interview Prep</span>
            <span className="pill">Accountability Squad</span>
          </div>
          <button className="btn btn-secondary">Join a room</button>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
