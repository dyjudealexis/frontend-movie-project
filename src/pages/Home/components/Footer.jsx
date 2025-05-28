import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../utils/scrollToTop";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="page-up">
          <button onClick={scrollToTop} id="scrollToTopButton">
            <span className="arrow_carrot-up"></span>
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="footer__logo">
                <Link to="/">
                  <img src="/img/logo.png" alt="" />
                </Link>
              </div>
            </div>
           
            <div className="col-lg-3">
              <p className="m-0 p-0">
                Copyright &copy;{new Date().getFullYear()} All rights reserved
              </p>
              {/* <br /> */}
              <p className="m-0 p-0">
                Developed by{" "}
                <a
                  href="https://jude-alexis-dy.site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jude Alexis Dy
                </a>

              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close"></i>
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
