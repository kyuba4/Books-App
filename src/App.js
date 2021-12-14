import Header from "./components/Header";
import BooksList from "./components/BooksList";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);
  const [data, isPending, error] = useFetch(bookFilter);

  return (
    <>
      <Header bookFilter={setBookFilter} />
      <BooksList data={data} isPending={isPending} error={error} />
    </>
  );
};

export default App;
