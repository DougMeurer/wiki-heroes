import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
        style={{ width: "380px" }}
        alt="logo"
      />
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="/Collections">Collections Gallery</Link>
      </div>
    </>
  );
}

export default NavBar;
