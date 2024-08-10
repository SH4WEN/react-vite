import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
// import { useTheme } from "../../common/ThemeContext";

const Nav = () => {
  // const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar bg-transparent fixed-top">
      <div className="container-fluid  ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="mx-5">
          <i class="bi bi-sun"></i>
        </div>

        <div
          className="offcanvas offcanvas-start text-center "
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header ">
            <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
              SH4WEN <i class="bi bi-check-circle"></i>
            </h5>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  to="hero"
                  smooth={true}
                  offset={-200}
                  duration={300}
                  className="nav-link "
                >
                  <i class="bi bi-house-door"> Home</i>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  offset={-190}
                  duration={300}
                  className="nav-link "
                >
                  {" "}
                  <i class="bi bi-check2-circle"> Project</i>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  offset={-160}
                  duration={300}
                  className="nav-link "
                >
                  {" "}
                  <i class="bi bi-info-circle"> About</i>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="tech"
                  smooth={true}
                  offset={-160}
                  duration={300}
                  className="nav-link "
                >
                  <i class="bi bi-highlights"> Tech..</i>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-160}
                  duration={300}
                  className="nav-link "
                >
                  <i class="bi bi-person-lines-fill"> Contacts</i>
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          <div class="m-5">
            <small>&copy; sh4wen.</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
