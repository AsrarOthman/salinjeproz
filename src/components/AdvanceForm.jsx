import React, { useState } from "react";

export default function AdvanceForm({ duration, setDuration, password, setPassword }) {
  const [showAdvance, setShowAdvance] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px", display:"flex", flexDirection:"column" }}>
      <button
      type="button"
        onClick={() => setShowAdvance(!showAdvance)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#00aaff99",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width:"100px"
        }}
      >
        {showAdvance ? "Tutup Advance" : "Advance"}
        
      </button>

      {showAdvance && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <label>Tempoh Masa Data:</label>
            <br />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="1">1 minit</option>
              <option value="5">5 minit</option>
              <option value="10">10 minit</option>
              <option value="30">30 minit</option>
            </select>
          </div>

          <div>
            <label>Password (optional):</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
