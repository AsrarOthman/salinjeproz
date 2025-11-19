import React from "react";

export default function TermsPrivacy() {
  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        💾 SalinJe.com
      </h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        Sistem untuk menyimpan fail, teks, atau data dengan selamat di
        pelayan.
      </p>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #ddd" }} />

      {/* TERMA */}
      <section>
        <h2 style={{ color: "#333" }}>🧾 Terma Perkhidmatan (Terms of Service)</h2>
        <ol style={{ lineHeight: "1.8", color: "#444" }}>
          <li>
            <strong>Tujuan Sistem:</strong> Laman ini disediakan untuk memuat naik
            dan berkongsi fail atau teks secara sementara bagi kemudahan pengguna.
          </li>
          <li>
            <strong>Tanggungjawab Pengguna:</strong>
            <ul>
              <li>
                Pengguna bertanggungjawab sepenuhnya terhadap kandungan yang dimuat
                naik.
              </li>
              <li>
                Dilarang memuat naik sebarang fail yang melanggar undang-undang,
                hak cipta, atau mengandungi bahan sensitif / tidak sesuai.
              </li>
              <li>
                Pentadbir berhak memadam mana-mana fail tanpa notis jika disyaki
                melanggar polisi.
              </li>
            </ul>
          </li>
          <li>
            <strong>Had Tanggungjawab:</strong> Pihak pengendali tidak
            bertanggungjawab atas kehilangan data, kerosakan, atau penyalahgunaan
            fail oleh pihak ketiga.
          </li>
          <li>
            <strong>Perubahan Polisi:</strong> Terma ini boleh dikemas kini dari
            semasa ke semasa tanpa notis awal.
          </li>
        </ol>
      </section>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #ddd" }} />

      {/* PRIVACY */}
      <section>
        <h2 style={{ color: "#333" }}>🔒 Dasar Privasi (Privacy Policy)</h2>
        <ol style={{ lineHeight: "1.8", color: "#444" }}>
          <li>
            <strong>Data yang Dikumpul:</strong> Nama folder, fail, deskripsi, masa
            muat naik, dan tempoh tamat simpanan. Tiada data peribadi lain
            dikumpul kecuali yang dimasukkan pengguna sendiri. Had saiz semua fail yang dimuat naik adalah 100MB sahaja.
          </li>
          <li>
            <strong>Cara Data Digunakan:</strong> Data hanya digunakan untuk
            memastikan fungsi sistem berjalan (contohnya menyimpan fail sementara).
            Tiada data dijual atau dikongsi dengan pihak ketiga.
          </li>
          <li>
            <strong>Keselamatan Data:</strong> Semua fail disimpan di pelayan yang
            dilindungi. Akses kepada fail atau teks hanya dibenarkan kepada pengguna yang memiliki kata laluan yang sah. Sistem ini direka bagi memastikan hanya pihak yang diberi kebenaran boleh melihat atau memuat turun kandungan.
          </li>
          <li>
            <strong>Penghapusan Data:</strong> Fail akan dipadam secara automatik
            selepas tempoh tamat. Pengguna boleh menetapkan tempoh penghapusan automatik antara 1 hingga 30 minit.Sekiranya pengguna tidak menetapkan tempoh tersebut, sistem akan menggunakan nilai lalai iaitu 1 minit.
          </li>
          <li>
            <strong>Persetujuan:</strong> Dengan menggunakan laman ini, anda
            bersetuju dengan Terma dan Polisi ini.
          </li>
        </ol>
      </section>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #ddd" }} />

      <footer style={{ textAlign: "center", color: "#777", fontSize: "14px" }}>
        © {new Date().getFullYear()} SalinJe.com — Semua hak cipta terpelihara.
      </footer>
    </div>
  );
}
