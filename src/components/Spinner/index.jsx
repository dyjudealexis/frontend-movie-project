import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <>
      <div style={{minHeight: "95vh"}}>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
