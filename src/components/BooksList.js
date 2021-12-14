import Book from "./Book";
import Loader from "react-loader-spinner";

const BooksList = ({ data, isPending, error }) => {
  return (
    <>
      {!data && !isPending && <h1 className="result-heading">Type a book above</h1>}
      {isPending && !data && (
        <div className="loading">
          <Loader type="TailSpin" color="#323232" height={90} width={90} />
        </div>
      )}
      {data && <h1 className="result-heading">Results</h1>}
      {data && (
        <div className="wrapper">
          {data.map((book) => {
            return <Book book={book.volumeInfo} key={book.id} />;
          })}
        </div>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default BooksList;
