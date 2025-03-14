import useFetchGift from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGift(category);

  return (
    <div>
      <h3 className="title- card ">{category}</h3>
      {isLoading && <h2>Cargando....</h2>}
      <div className="card-grid">
        {images.map((res) => (
          <GiftItem key={res.id} {...res} />
        ))}
      </div>
    </div>
  );
};

GiftItem.propTypes = {
  category: PropTypes.string.isRequired,
};
