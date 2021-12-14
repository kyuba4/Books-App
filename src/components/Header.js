import Logo from "../assets/logo.png";

const Header = ({ bookFilter }) => {
  const preventDefault = (e) => {
    e.preventDefault();
  };

  const labelMove = (e) => {
    const value = e.target.value.length;
    const label = document.getElementById("form-label");

    value > 0 ? label.classList.add("moved") : label.classList.remove("moved");
  };

  const onInputChange = (e) => {
    bookFilter(e.target.value);
  };

  const handleInput = (e) => {
    labelMove(e);
    onInputChange(e);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <form onSubmit={preventDefault}>
          <label id="form-label">Search a book</label>
          <input type="text" onChange={handleInput} />
        </form>
      </div>
    </div>
  );
};
export default Header;
