export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ce68e45c7cmshd58383cb3a9488bp1bc7a8jsn5e0ae391b192',
  },
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': 'ce68e45c7cmshd58383cb3a9488bp1bc7a8jsn5e0ae391b192',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
