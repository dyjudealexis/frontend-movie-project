// Toast.js
import React, { useEffect, useState } from 'react';

const Toast = ({ message, onClose, type = 'success' }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();
    const duration = 5000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = 100 - (elapsed / duration) * 100;
      setProgress(Math.max(0, percent));
    }, 30);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onClose();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onClose]);

  const isError = type === 'error';
  const iconClass = isError ? 'fa fa-times' : 'fa fa-check';
  const iconColor = isError ? '#e74c3c' : '#2ecc71';

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '4px',
      zIndex: 1000,
      minWidth: '250px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>{message}</span>
        <i className={iconClass} style={{ marginLeft: '10px', color: iconColor }} />
      </div>
      <div style={{
        height: '4px',
        backgroundColor: 'red',
        width: `${progress}%`,
        marginTop: '8px',
        transition: 'width 0.1s linear'
      }} />
    </div>
  );
};

export default Toast;
