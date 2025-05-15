// src/middleware/AuthMiddleware.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDecryptedCookie } from "../utils/cookieUtils";

const AuthMiddleware = ({ children }) => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const userInfo = getDecryptedCookie(
      `${import.meta.env.VITE_COOKIE_USER_INFO_NAME}`
    );
    const bearerToken = getDecryptedCookie(
      `${import.meta.env.VITE_COOKIE_BEARER_TOKEN_NAME}`
    );

    if (!userInfo || !bearerToken) {
      navigate("/login");
    }
    else{
      setCheckingAuth(false);
    }
  }, [navigate]);

  if (checkingAuth) return null;

  return children;
};

export default AuthMiddleware;
