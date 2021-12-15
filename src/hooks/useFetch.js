import { useState, useEffect } from "react";

const useFetch = (title) => {
  const API_KEY = "AIzaSyBPf9bAmhP_UOwIGVWwoRHKUHX49b-Q2Xg";

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (title) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.items);
          setError(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setData(null);
    }
  }, [title]);

  return [data, error];
};

export default useFetch;
