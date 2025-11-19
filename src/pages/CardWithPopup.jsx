import { useState } from "react";

const CardWithPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="card"
        onClick={() => setIsOpen(true)} // bila klik buka popup
        style={{
          cursor: "pointer",
          width: "250px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <img
            src="/src/assets/repair2.jpeg"
            alt="Sample"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ fontSize: "18px", margin: "8px 0", padding: "0 10px" }}>
            Trade In
          </h3>
          <p style={{ fontSize: "14px", color: "#555", padding: "0 10px" }}>
            Nak Tahu Harga Trade In Gadget Korang ?!
          </p>
        </div>
      </div>

      {/* Popup */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <h2>Maklumat Trade In</h2>
            <p>
              Hantar details phone anda kepada kami untuk dapatkan harga trade
              in.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: "1rem",
                padding: "8px 16px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardWithPopup;
