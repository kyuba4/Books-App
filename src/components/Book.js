const Book = ({ book }) => {
  const { imageLinks, title, authors, language, industryIdentifiers, publishedDate } = book;
  const NO_IMG = "https://dummyimage.com/200x300&text=No+Image";

  // published date publishedDate

  return (
    <a className="book" rel="noreferrer" target="_blank" href={book.infoLink}>
      <div className="card">
        {/* Thumbnail */}
        {book.imageLinks && (
          <div className="card__thumbnail">
            <img src={imageLinks.thumbnail} alt="Thumbnail" />
          </div>
        )}

        {/* No Thumbnail Placeholder */}
        {!book.imageLinks && (
          <div className="card__thumbnail">
            <img src={NO_IMG} alt="Thumbnail" />
          </div>
        )}

        {/* Title/s */}
        {book.title && <div className="card__desc-line">Title: {title + ", "}</div>}

        {/* Authors */}
        {authors && (
          <div className="card__desc-line">
            Author/s:{" "}
            {authors.map((author) => {
              return <span key={author}>{author + ", "}</span>;
            })}
          </div>
        )}

        {/* Language */}
        {language && <div className="card__desc-line">Language: {language.toUpperCase()}</div>}

        {/* ISBN */}
        {industryIdentifiers && <div className="card__desc-line">ISBN: {industryIdentifiers[0].identifier}</div>}

        {/* Published */}
        {publishedDate && <div className="card__desc-line">Published: {publishedDate}</div>}
      </div>
    </a>
  );
};

export default Book;
