export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=XHZCul4K3YpzpFSYFPfWdEV38SCdv7CN&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gif = data.map((res) => ({
    id: res.id,
    title: res.title,
    img: res.images.downsized_medium.url,
  }));
  return gif;
};
