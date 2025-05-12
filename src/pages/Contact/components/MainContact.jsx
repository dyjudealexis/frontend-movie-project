import React from "react";

const MainContact = () => {
  return (
    <div>
      {/* Contact Section Begin */}
      <section className="login spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Send Me A Message</h3>
                <form action="#">
                  <div className="input__item">
                    <input type="text" placeholder="Full Name" />
                    <span className="fa fa-user"></span>
                  </div>
                  <div className="input__item">
                    <input type="email" placeholder="Email Address" />
                    <span className="icon_mail"></span>
                  </div>
                  <div className="input__item">
                    <input type="text" placeholder="Subject" />
                    <span className="fa fa-sticky-note"></span>
                  </div>
                  <div className="input__item text__area">
                    <textarea
                      className="form-control rounded-0"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="site-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Contact Information</h3>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li style={{ marginBottom: "10px", color: "white" }}>
                    <i
                      className="fa fa-user"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Jude Alexis Dy
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <i
                      className="fa fa-phone"
                      style={{ marginRight: "10px", color: "white" }}
                    ></i>
                    <a href="tel:+639204042919">+63 9204042919</a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <i
                      className="fa fa-envelope"
                      style={{ marginRight: "10px", color: "white" }}
                    ></i>
                    <a href="mailto:dyjudealexis@gmail.com">
                      dyjudealexis@gmail.com
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <i
                      className="fa fa-globe"
                      style={{ marginRight: "10px", color: "white" }}
                    ></i>
                    <a
                      href="https://jude.example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jude.example.com
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <i
                      className="fa fa-linkedin"
                      style={{ marginRight: "10px", color: "white" }}
                    ></i>
                    <a
                      href="https://www.linkedin.com/in/jude-alexis-dy-9b7213215"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {"linkedin.com/in/jude-alexis-dy-9b7213215"}
                    </a>
                  </li>
                  {/* Dummy info */}
                  <li style={{ marginBottom: "10px", color: "white" }}>
                    <i
                      className="fa fa-map-marker"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Taguig City, Metro Manila, Philippines
                  </li>
                  <li style={{ marginBottom: "10px", color: "white" }}>
                    <i
                      className="fa fa-calendar"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Available: Mon–Fri, 9AM–6PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Login Section End */}
    </div>
  );
};

export default MainContact;
