import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDecryptedCookie } from "../utils/cookieUtils";

const GuestRoute = ({ children }) => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const userInfo = getDecryptedCookie(
      `${import.meta.env.VITE_COOKIE_USER_INFO_NAME}`
    );
    const bearerToken = getDecryptedCookie(
      `${import.meta.env.VITE_COOKIE_BEARER_TOKEN_NAME}`
    );

    if (userInfo || bearerToken) {
      navigate("/");
    } else {
      setCheckingAuth(false); // allow rendering after check
    }
  }, [navigate]);

  // Prevent rendering until auth check is done
  if (checkingAuth) return null;

  return children;
};

export default GuestRoute;
