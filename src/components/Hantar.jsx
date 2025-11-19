import React, { useState } from "react";
import write from "/src/assets/write.png";
import AdvanceForm from "./AdvanceForm";
const API_CBOX = import.meta.env.VITE_API_BASE_URL;

export default function Hantar() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("1");
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // <-- progress state
  const [agreed, setAgreed] = useState(false);

  async function handleCreate(e) {
    e.preventDefault();

    if (!agreed) {
      alert("Sila tandakan persetujuan Dasar Privasi sebelum meneruskan.");
      return; // hentikan proses
    }

    setLoading(true);
    setResult(null);
    setProgress(0);

    const fd = new FormData();
    fd.append("name", name);
    fd.append("description", description);
    fd.append("duration", duration);
    if (password) fd.append("password", password);
    for (const f of files) fd.append("files", f);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_CBOX}/api/folders`, true);

    // Progress event semasa upload
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    // Bila siap upload
    xhr.onload = () => {
      setLoading(false);
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          setResult(response);
        } catch (err) {
          alert("Ralat parse data: " + err.message);
        }
      } else {
        alert("Ralat upload: " + xhr.statusText);
      }
    };

    // Ralat sambungan
    xhr.onerror = () => {
      setLoading(false);
      alert("Gagal menyambung ke server.");
    };

    xhr.send(fd);
  }

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
      <img
        src={write}
        alt="Logo"
        style={{
          height: "120px",
          cursor: "pointer",
          padding: "20px",
          paddingLeft: "-50px",
        }}
      />

      <form onSubmit={handleCreate} style={{ marginBottom: 24 }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label style={{ width: "150px" }}>Nama Folder:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              marginLeft: "0px",
              border: "#59595933 solid 1px",
              height: "22px",
              width: "80%",
            }}
            placeholder=" Contoh: Gambar"
          />
        </div>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
          }}
        >
          <label style={{ width: "150px" }}>Paste Text:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              marginLeft: "20px",
              border: "#59595933 solid 1px",
              minWidth: "100px",
              width:"100%",
              minHeight: "100px",
              padding: "8px",
              resize: "none",
            }}
            placeholder="Contoh: Link meeting / dll"
          />
        </div>

        <div>
          <label>Upload fail: </label>
          <a style={{fontSize:"12px"}}>* Max = 100MB sahaja</a>
          <br />
          <input
            type="file"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files);
              const maxSize = 100 * 1024 * 1024; // ✅ 100 MB

              // tapis fail lebih 100MB
              const oversized = files.filter((file) => file.size > maxSize);

              if (oversized.length > 0) {
                alert(`❌ Fail "${oversized[0].name}" melebihi 100MB!`);
                e.target.value = ""; // reset input
                return;
              }

              setFiles(files);
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ccccccff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "12px",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AdvanceForm
              duration={duration}
              setDuration={setDuration}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div style={{ display: "flex", alignItems: "end", margin: "5px" }}>
            <a>Optional</a>
          </div>
        </div>
        {/* checkbox */}
        <div style={{margin:"20px"}}>
          <input
            type="checkbox"
            id="privacy"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label
            htmlFor="privacy"
            style={{ marginLeft: "8px", fontSize: "12px", }}
          >
            Saya bersetuju dengan{" "}
            <a
              href="/privasi&terma"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Dasar Privasi
            </a>{" "}
            dan{" "}
            <a
              href="/privasi&terma"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Maklumat Sistem
            </a>
            .
          </label>
        </div>

        {/* butang simpan */}
        <button
          type="submit"
          disabled={loading || !agreed}
          style={{
            padding: "8px 16px",
            backgroundColor: loading || !agreed ? "#999" : "#2a8049ff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: loading || !agreed ? "not-allowed" : "pointer",
            marginTop: "12px",
          }}
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </form>

      {/* Progress bar */}
      {loading && (
        <div
          style={{
            width: "300px",
            height: "10px",
            backgroundColor: "#eee",
            borderRadius: "5px",
            overflow: "hidden",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#2a8049ff",
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
      )}

      {loading && (
        <div style={{ marginBottom: 24 }}>
          <a>Sila tunggu... {progress}%</a>
        </div>
      )}

      {!loading && result && (
        <div style={{ marginBottom: 24 }}>
          <a style={{ color: "green" }}>✅ Berjaya disimpan!</a>
        </div>
      )}
    </div>
  );
}
