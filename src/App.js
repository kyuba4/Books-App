import Header from "./components/Header";
import BooksList from "./components/BooksList";
import { useEffect, useState } from "react";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);

  useEffect(() => {
    console.log(bookFilter);
  }, [bookFilter]);

  return (
    <>
      <Header bookFilter={setBookFilter} />
      <BooksList />
    </>
  );
};

export default App;
