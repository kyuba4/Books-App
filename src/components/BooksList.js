import Book from "./Book";

const BooksList = ({ books }) => {
  return (
    <div className="wrapper">
      {books.map((book) => {
        return <Book book={book.volumeInfo} key={book.id} />;
      })}
    </div>
  );
};

export default BooksList;
