import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "300px",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.09)), url('/src/assets/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <div
          style={{
            marginBottom: "0.5rem",
            color: "white",
            fontSize: "2rem",
            padding: "20px",
            marginTop: "-20px",
            display:"flex",
            flexDirection:"row"
          }}
        >
          <h2 style={{color:"black"}}>SALIN</h2>
          <h2 style={{color:"red"}}>JE</h2>
          <h2>.COM</h2>
        </div>

        <div style={{ paddingLeft: "20px" }}>
          <span
            style={{
              color: "white",
              lineHeight: "1.6",
              background: "rgba(0, 0, 0, 0.5)",
              textAlign: "justify",
              fontSize: "24px",
              fontWeight: "bold",
              display: "inline-block",
              padding: "5px 10px",
            }}
          >
            " SalinJe.com ialah sistem Paste dan Copy data yang memudahkan anda
            menghantar teks atau fail dengan cepat dan mudah."
          </span>
        </div>

        <div style={{ padding: "20px" }}>
          {/* <span
            style={{
              color: "white",
              lineHeight: "1.6",
              background: "rgba(0, 0, 0, 0.5)",
              textAlign: "justify",
              fontSize: "20px",
              display: "inline-block",
              padding: "5px 10px",
            }}
          >
            Setiap perkongsian boleh dilindungi dengan kata laluan dan tempoh data disimpan sementara di pelayan kami  (maksimum selama 30 minit) bagi memastikan maklumat anda kekal peribadi, selamat, dan terlindung sepenuhnya.
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
