import Header from "./components/Header";
import BooksList from "./components/BooksList";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);
  const [data, error] = useFetch(bookFilter);

  return (
    <>
      <Header bookFilter={setBookFilter} />
      {/* Is typed means if user typed something into input */}
      <BooksList data={data} isTyped={bookFilter} error={error} />
    </>
  );
};

export default App;
