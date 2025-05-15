import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginIcon from "../../../assets/svg/LoginIcon";
import SignUpIcon from "../../../assets/svg/SignUpIcon";
import { deleteCookie, getDecryptedCookie } from "../../../utils/cookieUtils";
import { toast } from "react-toastify";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userInfo = getDecryptedCookie(
    `${import.meta.env.VITE_COOKIE_USER_INFO_NAME}`
  );
  const bearerToken = getDecryptedCookie(
    `${import.meta.env.VITE_COOKIE_BEARER_TOKEN_NAME}`
  );

  const isActive = (path) => (location.pathname === path ? "active" : "");
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const logOut = () => {
    deleteCookie(`${import.meta.env.VITE_COOKIE_USER_INFO_NAME}`);
    deleteCookie(`${import.meta.env.VITE_COOKIE_BEARER_TOKEN_NAME}`);

    toast.success("Log out successful!");

    navigate('/login');
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-xl-2">
            <div className="header__logo">
              <Link to="/">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>
          </div>

          <div className="col-6 d-xl-none text-end">
            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle btn text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </div>

          <div className="col-xl-8 d-none d-xl-block">
            <div className="header__nav">
              <nav className="header__menu">
                <ul>
                  <li className={isActive("/")}>
                    <Link to="/">Homepage</Link>
                  </li>
                  <li className={isActive("/category/action")}>
                    <Link to="/category/action">Action</Link>
                  </li>
                  <li className={isActive("/category/horror")}>
                    <Link to="/category/horror">Horror</Link>
                  </li>
                  <li className={isActive("/category/fantasy")}>
                    <Link to="/category/fantasy">Fantasy</Link>
                  </li>
                  <li className={isActive("/category/drama")}>
                    <Link to="/category/drama">Drama</Link>
                  </li>
                  <li className={isActive("/contact-me")}>
                    <Link to="/contact-me">Contact Me</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-2 d-none d-xl-block">
            <div className="header__right dropdown">
              <Link to="/search" className="search-switch btn text-white">
                <span className="icon_search"></span>
              </Link>
              <button
                className="btn dropdown-toggle text-white"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="icon_profile text-white"></span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {!userInfo || !bearerToken ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className={`dropdown-item ${isActive(
                          "/login"
                        )} text-black`}
                      >
                        <LoginIcon /> Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sign-up"
                        className={`dropdown-item ${isActive(
                          "/sign-up"
                        )} text-black`}
                      >
                        <SignUpIcon /> Sign Up
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <h5 className="dropdown-item text-black fw-bold">
                        {"Hi, " + userInfo.full_name}
                      </h5>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-black"
                        onClick={logOut}
                      >
                        <span className="fa fa-sign-out"></span> Log out
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav d-xl-none rounded-4">
            <ul>
              <li className={isActive("/")}>
                <Link to="/" onClick={toggleMobileMenu}>
                  Homepage
                </Link>
              </li>
              <li className={isActive("/category/action")}>
                <Link to="/category/action" onClick={toggleMobileMenu}>
                  Action
                </Link>
              </li>
              <li className={isActive("/category/horror")}>
                <Link to="/category/horror" onClick={toggleMobileMenu}>
                  Horror
                </Link>
              </li>
              <li className={isActive("/category/fantasy")}>
                <Link to="/category/fantasy" onClick={toggleMobileMenu}>
                  Fantasy
                </Link>
              </li>
              <li className={isActive("/category/drama")}>
                <Link to="/category/drama" onClick={toggleMobileMenu}>
                  Drama
                </Link>
              </li>
              <li className={isActive("/contact-me")}>
                <Link to="/contact-me" onClick={toggleMobileMenu}>
                  Contact Me
                </Link>
              </li>
              <li>
                <Link to="/search" onClick={toggleMobileMenu}>
                  <span className="icon_search"></span> Search
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleMobileMenu}>
                  <LoginIcon /> Login
                </Link>
              </li>
              <li>
                <Link to="/sign-up" onClick={toggleMobileMenu}>
                  <SignUpIcon /> Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
