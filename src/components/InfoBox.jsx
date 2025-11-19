import React from "react";
import "./Components.css";

const InfoBox = ({ title, boxContent, width,minWidth, maxWidth, height }) => {
  return (
    <div
      style={{
        margin: "0", // jangan ada margin luar, biar parent control gap
        flex: "0 0 auto", // ⬅️ penting: ikut saiz sebenar, jangan grow
      }}
    >
      <div
        className="card"
        style={{
          width: width || "auto",       // guna width yang diberi
          minWidth: minWidth || "200px",
          maxWidth: maxWidth || "100%", // had maksimum
          height: height || "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "flex-start",
          padding: "20px",
          boxSizing: "border-box",
          margin:"20px"
        }}
      >
        <div style={{ width: "100%" }}>
          <a style={{ fontSize:"24px", fontWeight: "bold" }}>{title}</a>
          <hr />
          <div>{boxContent}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
