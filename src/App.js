import Header from "./components/Header";
import BooksList from "./components/BooksList";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);
  const [data, error] = useFetch(bookFilter);
  const [input, setInput] = useState("");

  return (
    <>
      <Header bookFilter={setBookFilter} setInput={setInput} />
      <BooksList data={data} error={error} input={input} />
    </>
  );
};

export default App;
