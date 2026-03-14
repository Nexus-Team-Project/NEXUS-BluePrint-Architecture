function HeroPanel({ eyebrow, title, text }) {
  return (
    <div className="hero-panel">
      <div className="hero-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default HeroPanel;