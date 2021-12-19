import Header from "./components/Header";
import BooksList from "./components/BooksList";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";

const App = () => {
  const [bookFilter, setBookFilter] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [data] = useFetch(bookFilter, setIsEmpty);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (!data) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [data]);

  return (
    <>
      <Header bookFilter={setBookFilter} setPending={setIsPending} />
      <BooksList data={data} isPending={isPending} isEmpty={isEmpty} />
    </>
  );
};

export default App;
