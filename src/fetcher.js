const BASE_URL = "http://localhost:3001/";

export const fetcher = (url, callback) => {
  fetch(BASE_URL + url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
};

export const fetcherAsync = async (url) => {
  const response = await fetch(BASE_URL + url);
  const responseData = await response.json();
  return responseData;
};
