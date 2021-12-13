import Logo from "../assets/logo.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <form>
          <input type="text" required placeholder="Search a book" />
        </form>
      </div>
      <div className="powered-by">
        <a href="https://developers.google.com/books/docs/overview" target="_blank" rel="noreferrer">
          Powered by Google Books API
        </a>
      </div>
    </div>
  );
};
export default Header;
