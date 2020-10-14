/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=U7ajhRtYO09uUIAwouVaH60u37kE98zO`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs
};
