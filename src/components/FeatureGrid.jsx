function FeatureGrid({ items }) {
  return (
    <section className="section container">
      <div className="section-heading">
        <h2>Learn faster with a UI built for momentum</h2>
        <p>
          Every part of SkillSprint is designed to keep learners motivated, consistent, and moving
          toward real outcomes.
        </p>
      </div>
      <div className="card-grid three-up">
        {items.map((item) => (
          <article className="card" key={item.title}>
            <span className="icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureGrid;
