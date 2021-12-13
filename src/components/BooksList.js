import Book from "./Book";

const BooksList = ({ books }) => {
  return (
    <div className="wrapper">
      {books &&
        books.map((book) => {
          return <Book book={book} />;
        })}
    </div>
  );
};

export default BooksList;
