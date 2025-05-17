import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import { setEncryptedCookie } from "../../../utils/cookieUtils";

const MainLogin = () => {
  const [formData, setFormData] = useState({
    email: "demoaccount@example.com",
    password: "demoaccount123",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post("/api/login", formData);
      //console.log(res.data);
      toast.success("Login successful!");

      setEncryptedCookie(`${import.meta.env.VITE_COOKIE_BEARER_TOKEN_NAME}`, `${res.data.token}`, { expires: 7 });
      setEncryptedCookie(`${import.meta.env.VITE_COOKIE_USER_INFO_NAME}`, JSON.stringify(res.data.user), { expires: 7 });

      navigate("/"); // adjust path if needed
    } catch {
      // console.error(err);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Login Section Begin */}
      <section className="login signup spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="input__item">
                    <input
                      type="text"
                      placeholder="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="icon_mail"></span>
                  </div>
                  <div className="input__item" style={{ position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
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
                  <button type="submit" className="site-btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login Now"}
                  </button>
                </form>
                <h5 className="d-lg-none d-block">
                  Don’t Have An Account? <Link to="/sign-up">Register Now</Link>
                </h5>
              </div>
            </div>
            <div className="col-lg-6 d-lg-block d-none">
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
