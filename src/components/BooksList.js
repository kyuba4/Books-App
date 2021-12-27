import Book from "./Book";
import Loader from "react-loader-spinner";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const BooksList = ({ data, isPending }) => {
  return (
    <>
      {!data && <h1 className="result-heading">Type a book above</h1>}
      {isPending && (
        <div className="loading">
          <Loader type="TailSpin" color="#000000" height={85} width={85} />
        </div>
      )}
      {data && (
        <>
          <h1 className="result-heading">Results</h1>
          <TransitionGroup className="wrapper">
            {data.map((book) => (
              <CSSTransition key={book.id} timeout={600} classNames={"fade-"} appear={true}>
                <Book book={book.volumeInfo} key={book.id} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
