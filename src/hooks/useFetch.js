import { useState, useEffect } from "react";

const useFetch = (title) => {
  const API_KEY = "AIzaSyBPf9bAmhP_UOwIGVWwoRHKUHX49b-Q2Xg";

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.items);
        setIsPending(false);
        setError(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [title]);

  return [data, isPending, error];
};

export default useFetch;
