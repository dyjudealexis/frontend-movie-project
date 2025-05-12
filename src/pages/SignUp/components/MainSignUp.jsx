import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      {/* Signup Section Begin */}
      <section className="signup spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Sign Up</h3>
                <form action="#">
                  <div className="input__item">
                    <input type="text" placeholder="Email address" />
                    <span className="icon_mail"></span>
                  </div>
                  <div className="input__item">
                    <input type="text" placeholder="Your Name" />
                    <span className="icon_profile"></span>
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
                <h5>
                  Already have an account? <Link to="/login">Log In!</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Signup Section End */}
    </>
  );
};

export default MainSignUp;
