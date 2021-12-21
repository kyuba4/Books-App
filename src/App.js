import Header from "./components/Header";
import BooksList from "./components/BooksList";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);
  const { data, pending } = useFetch(bookFilter);

  return (
    <>
      <Header bookFilter={setBookFilter} />
      <BooksList data={data} isPending={pending} />
    </>
  );
};

export default App;
