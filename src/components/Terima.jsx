import React, { useState } from "react";
import copy from "/src/assets/copy.png";

const API_CBOX = import.meta.env.VITE_API_BASE_URL;

export default function Terima() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [password, setPassword] = useState("");
  const [folderDetails, setFolderDetails] = useState(null);
  const [error, setError] = useState("");

  // 🔍 Cari folder berdasarkan nama
  const handleSearch = async () => {
    try {
      const res = await fetch(`${API_CBOX}/api/folders/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  // 🔐 Akses folder dengan password (jika ada)
  const handleAccess = async () => {
    if (!selected) return;
    try {
      const res = await fetch(`${API_CBOX}/api/folders/${selected.id}/access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setFolderDetails(data);
        setError("");
      } else {
        setError(data.error || "Access denied");
      }
    } catch (err) {
      console.error("Access error:", err);
      setError("Server error");
    }
  };

  return (
    <div
      style={{
        paddingLeft: "0px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <img
        src={copy}
        alt="Logo"
        style={{
          height: "120px",
          cursor: "pointer",
          padding: "20px",
        }}
      />

      {/* Input carian */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <label>Nama Folder:</label>
        <input
          placeholder="Cari..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            marginLeft: "20px",
            border: "#59595933 solid 1px",
            height: "25px",
            width: "150px",
            paddingLeft: "5px",
          }}
        />
      </div>

      {/* Butang cari */}
      <div style={{ marginBottom: 12 }}>
        <button
          style={{
            margin: "20px",
            padding: "8px 16px",
            backgroundColor: "#2a8049ff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={handleSearch}
        >
          Cari Folder
        </button>
      </div>

      {/* Senarai hasil carian */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {results.map((f) => (
          <li key={f.id} style={{ marginBottom: "10px" }}>
            <strong>{f.name}</strong> (tamat:{" "}
            {new Date(f.expires_at).toLocaleString()})
            <button
              style={{
                marginLeft: "20px",
                padding: "6px 12px",
                backgroundColor: "#2a8049ff",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelected(f);
                setFolderDetails(null);
                setError("");
              }}
            >
              Buka Folder
            </button>
          </li>
        ))}
      </ul>

      {/* Input password jika folder dipilih */}
      {selected && !folderDetails && (
        <div style={{ marginTop: 20 }}>
          <h3>Akses Folder: {selected.name}</h3>
          <input
            type="password"
            placeholder="Password (jika ada)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              border: "#59595933 solid 1px",
              padding: "5px",
              borderRadius: "4px",
            }}
          />
          <button
            style={{
              marginLeft: "12px",
              padding: "8px 16px",
              backgroundColor: "#2a8049ff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={handleAccess}
          >
            Salin Je
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      {/* Paparan folder selepas akses berjaya */}
      {folderDetails && (
        <div style={{ marginTop: 20, width: "80%", maxWidth: "600px" }}>
          <label>Paste Text:</label>
          <div
            style={{
              border: "#59595933 solid 1px",
              margin: "10px 0 20px 0",
              minHeight: "100px",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            {folderDetails.description ? (
              folderDetails.description
            ) : (
              <span style={{ color: "gray", fontStyle: "italic" }}>
                Tiada teks ditampal
              </span>
            )}
          </div>

          <p>
            Fail dalam folder:{" "}
            <strong>{folderDetails.name || "Tiada fail di salin"}</strong>
          </p>

          {/* Fail dalam folder */}
          {folderDetails?.files && folderDetails.files.length > 0 ? (
            <ul>
              {folderDetails.files.map((file) => (
                <li key={file.id}>
                  <a
                    href={`${API_CBOX}/api/folders/${folderDetails.id}/download/${file.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#2a8049ff",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {file.original_name} ({Math.round(file.size / 1024)} KB)
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: "gray", fontStyle: "italic" }}>
              Tiada fail untuk disalin
            </p>
          )}
        </div>
      )}
    </div>
  );
}
