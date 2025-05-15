import React, { useState } from "react";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const MainContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false); // <-- added loading state
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const IS_DEV_ENV =
    window.location.hostname === "localhost" &&
    import.meta.env.VITE_NODE_ENV === "development";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // <-- start loading
    setStatusMessage("");

    try {
      if (!IS_DEV_ENV && !recaptchaToken) {
        toast.error("Please verify the reCAPTCHA.");
        setLoading(false);
        return;
      }

      await axiosInstance.post("/api/inquiries", {
        full_name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      // setStatusMessage("Message sent successfully!");
      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch {
      // console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
      // setStatusMessage("Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // <-- stop loading
    }
  };

  return (
    <div>
      {/* Contact Section Begin */}
      <section className="login spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Send Me A Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="input__item">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <span className="fa fa-user"></span>
                  </div>
                  <div className="input__item">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="icon_mail"></span>
                  </div>
                  <div className="input__item">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <span className="fa fa-sticky-note"></span>
                  </div>
                  <div className="input__item text__area mb-3">
                    <textarea
                      name="message"
                      className="form-control rounded-0"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {!IS_DEV_ENV && (
                    <>
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Use your site key
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken("")}
                      />
                    </>
                  )}

                  <button
                    type="submit"
                    className="site-btn mt-4"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
                {statusMessage && (
                  <p style={{ marginTop: "10px", color: "white" }}>
                    {statusMessage}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Info */}
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
                      href="https://jude-alexis-dy.site"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jude-alexis-dy.site
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
                      linkedin.com/in/jude-alexis-dy-9b7213215
                    </a>
                  </li>
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
      {/* Contact Section End */}
    </div>
  );
};

export default MainContact;
