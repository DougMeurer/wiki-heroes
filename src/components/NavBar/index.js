import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import navImg from "../../assets/backggg.png";

function NavBar() {
  return (
    <Nav className="bg-danger mb-3 row align-items-end">
      <div className="nav-item col">
        <Link to="/" className="nav-link text-warning">
          HOME
        </Link>
      </div>
      <div className="nav-item col">
        <img src={navImg} style={{ width: "450px" }} alt="logo" />
      </div>
      <div className="nav-item col">
        <Link to="/Collections" className="nav-link text-warning">
          COLLECTIONS GALLERY
        </Link>
      </div>
    </Nav>
  );
}

export default NavBar;
