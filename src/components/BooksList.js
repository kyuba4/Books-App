import Book from "./Book";
import Loader from "react-loader-spinner";
import { useEffect } from "react";

const BooksList = ({ data, input, error }) => {
  useEffect(() => {
    const element = document.querySelector(".wrapper");
    if (element) {
      setTimeout(() => {
        element.classList.remove("leave");
        element.classList.add("enter");
      }, 0);
    }
  }, [data]);

  return (
    <>
      {!data && <h1 className="result-heading">Type a book above</h1>}
      {input && !data && (
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
      {error && <div>{error}</div>}
    </>
  );
};

export default BooksList;
