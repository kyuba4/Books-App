import Book from "./Book";
import Loader from "react-loader-spinner";

const BooksList = ({ data, isPending }) => {
  return (
    <>
      {!data && <h1 className="result-heading">Type a book above</h1>}
      {data === null && isPending && (
        <div className="loading">
          <Loader type="TailSpin" color="#323232" height={90} width={90} />
        </div>
      )}
      {data && (
        <>
          <h1 className="result-heading">Results</h1>
          <div className="wrapper">
            {data.map((book) => {
              return <Book book={book.volumeInfo} key={book.id} />;
            })}
          </div>
        </>
      )}
      {data === undefined && (
        <div className="undefined-book">
          We don't know this book yet <br />
          Please try again
        </div>
      )}
    </>
  );
};

export default BooksList;
