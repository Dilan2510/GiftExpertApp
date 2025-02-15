export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ox44e4iWc96TT7C5Iiq6oS1xICQtd5PP&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gif = data.map((res) => ({
    id: res.id,
    title: res.title,
    img: res.images.downsized_medium.url,
  }));
  return gif;
};
