import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { toast } from 'react-toastify';

const MainSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    password: "",
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
      const res = await axiosInstance.post("/api/register", formData);
      console.log(res.data);
      toast.success("Registration successful! You can now login."); // ✅ Use this instead
      navigate('/login');
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again."); // ✅ Use this instead
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="signup spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Sign Up</h3>
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
                  <div className="input__item">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                    <span className="icon_profile"></span>
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
                    {loading ? "Registering..." : "Sign Up"}
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

    </>
  );
};

export default MainSignUp;
