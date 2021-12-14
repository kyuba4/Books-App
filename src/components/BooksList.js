import Book from "./Book";

const BooksList = ({ data, isPending, error }) => {
  return (
    <>
      {!data && !isPending && <h1 className="result-heading">Type a book above</h1>}
      {!isPending && data && <h1 className="result-heading">Results</h1>}
      <div className="wrapper">
        {data &&
          data.map((book) => {
            return <Book book={book.volumeInfo} key={book.id} />;
          })}
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    </>
  );
};

export default BooksList;
