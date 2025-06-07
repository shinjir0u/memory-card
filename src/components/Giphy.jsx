import { useEffect } from "react";

const API_KEY = "mcj1pGl3stb86b1gwnwPbLZz8oOZ4kfe";
const BASE_URL = "https://api.giphy.com/v1/gifs/";
const ENDPOINT =
  "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

function Giphy(name) {
  const url = `${BASE_URL}search?api_key=${API_KEY}&q=${name}${ENDPOINT}`;

  useEffect(() => {
    let ignored = false;
    if (!ignored) {
      async function fetchUrl() {
        const response = await fetch(url).then((response) => response.json());
        const imageUrl = response.data[0].images.original.url;
        console.log(imageUrl);
      }
      fetchUrl();
    }
    return () => (ignored = true);
  }, [url]);

  
}

export default Giphy;
