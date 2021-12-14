import Logo from "../assets/logo.png";

const Header = () => {
  const labelMove = (e) => {
    const value = e.target.value.length;
    const label = document.getElementById("form-label");

    if (value > 0) {
      label.classList.add("moved");
    }
    if (value === 0) {
      label.classList.remove("moved");
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <form>
          <label id="form-label">Search a book</label>
          <input type="text" required onChange={labelMove} />
        </form>
      </div>
    </div>
  );
};
export default Header;
