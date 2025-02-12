import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

const useFetchGift = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const newImage = await getGifts(category);
    setImages(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGift;
