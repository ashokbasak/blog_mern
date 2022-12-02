import "./navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:"#b39871"}}>
        <Link className="navbar-brand ml-50" to="#">
        BLOGGY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/write">
                Write
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
