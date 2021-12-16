import Logo from "../assets/logo.png";
import PoweredBy from "../assets/powered_by_google_on_white_hdpi.png";
import { useEffect, useState } from "react";

const Header = ({ bookFilter, setInput }) => {
  const [inputValue, setInputValue] = useState("");
  const element = document.querySelector(".wrapper");

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleLabelMove = (e) => {
    const length = e.target.value.length;
    const label = document.getElementById("form-label");

    length > 0 ? label.classList.add("moved") : label.classList.remove("moved");
  };

  const handleInput = (e) => {
    handleLabelMove(e);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (element) {
      element.classList.add("leave");
      element.classList.remove("enter");
    }

    setInput(inputValue);
    const timeoutID = setTimeout(() => bookFilter(inputValue), 800);
    return () => clearTimeout(timeoutID);
  }, [inputValue, bookFilter, setInput, element]);

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <form onSubmit={preventDefault}>
          <label id="form-label">Search a book</label>
          <input type="text" value={inputValue} onChange={handleInput} />
        </form>
      </div>
      <div id="powered-by">
        <a href="https://www.google.com/googlebooks/about/index.html" rel="noreferrer" target="_blank">
          <img src={PoweredBy} alt="Powered By Google" />
        </a>
      </div>
    </div>
  );
};
export default Header;
