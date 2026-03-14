function Card({ title, children, tone = "default" }) {
  return (
    <div className={`card tone-${tone}`}>
      <div className="card-title">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;