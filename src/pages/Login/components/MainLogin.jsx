import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      {/* Login Section Begin */}
      <section className="login spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Login</h3>
                <form action="#">
                  <div className="input__item">
                    <input type="text" placeholder="Email address" />
                    <span className="icon_mail"></span>
                  </div>
                  <div className="input__item" style={{ position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <span className="icon_lock"></span>
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        left: "92%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        zIndex: 2,
                        fontSize: "16px",
                        color: "#999",
                        width: "20px",
                      }}
                    >
                      {showPassword ? (
                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                      ) : (
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      )}
                    </span>
                  </div>
                  <button type="submit" className="site-btn">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Don’t Have An Account?</h3>
                <Link to="/sign-up" className="primary-btn">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Login Section End */}
    </div>
  );
};

export default MainLogin;
