import { useState, useEffect } from "react";

const useFetch = (title) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (title) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.items);
        });
    } else {
      setData(null);
    }
  }, [title, API_KEY]);

  return [data];
};

export default useFetch;
