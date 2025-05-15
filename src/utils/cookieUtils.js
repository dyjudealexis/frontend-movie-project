// cookieUtils.js
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const SECRET_KEY = `${import.meta.env.VITE_CRYPTO_JS_SECRET_KEY}`; // Use a secure key and store it safely

// Encrypt value
export const encryptValue = (value) => {
  return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
};

// Decrypt value
export const decryptValue = (encrypted) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    // console.error('Decryption error:', err);
    return null;
  }
};

// Set encrypted cookie
export const setEncryptedCookie = (name, value, options = {}) => {
  const encrypted = encryptValue(value);
  Cookies.set(name, encrypted, options);
};

export const getDecryptedCookie = (name) => {
  const encrypted = Cookies.get(name);
  const decrypted = encrypted ? decryptValue(encrypted) : null;
  try {
    return decrypted ? JSON.parse(decrypted) : null;
  } catch {
    return decrypted; // fallback if it's just a string
  }
};


// Delete cookie
export const deleteCookie = (name) => {
  Cookies.remove(name);
};
