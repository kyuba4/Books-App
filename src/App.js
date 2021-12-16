import Header from "./components/Header";
import BooksList from "./components/BooksList";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);
  const [data] = useFetch(bookFilter);
  const [isPending, setIsPending] = useState(false);

  return (
    <>
      <Header bookFilter={setBookFilter} setPending={setIsPending} />
      <BooksList data={data} isPending={isPending} />
    </>
  );
};

export default App;
