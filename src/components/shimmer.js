import React from "react";
import "./shimmer.css";

function Shimmer() {
  return (
    <div  className="shimmer-container">
      {Array(30)
        .fill("")
        .map((x, index) => {
          return <div key={index} className="shimmer-card"></div>;
        })}
    </div>
  );
}

export default Shimmer;
