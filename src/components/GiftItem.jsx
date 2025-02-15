import PropTypes from "prop-types";

export const GiftItem = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
