export const GiftItem = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};
