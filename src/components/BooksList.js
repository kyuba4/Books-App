import Book from "./Book";
import useFetch from "../hooks/useFetch";

const BooksList = () => {
  const [data, isPending, error] = useFetch("Harry Potter");

  return (
    <div className="wrapper">
      {data &&
        data.map((book) => {
          return <Book book={book.volumeInfo} key={book.id} />;
        })}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default BooksList;
