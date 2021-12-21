import { useState, useEffect } from "react";

const useFetch = (title) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const fetchData = async (title) => {
      setPending(true);

      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`);
      const data = await response.json();
      setData(data.items);

      setPending(false);
    };

    if (title) {
      fetchData(title);
    } else {
      setTimeout(() => {
        setData(null);
      }, 450);
    }
  }, [title, API_KEY]);

  return { data, pending };
};

export default useFetch;
