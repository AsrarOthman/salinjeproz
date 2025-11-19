// src/components/Footer.jsx
import "./Components.css";
const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#ecececff",
          paddingBottom: "40px",
        }}
      >
        <h2 style={{ padding: "40px", marginTop: "-40px", display:"flex", flexDirection:"column" }}>

          <a href="/*" class="custom-link">
            SALINje.COM
          </a>
          <br/>
          <a href="/home" class="custom-link" style={{fontSize:"15px"}}>
            Home
          </a>
           <a href="/privasi&terma" class="custom-link" style={{fontSize:"15px"}}>
            Dasar Privasi & Terma Perkhidmatan
          </a>
        </h2>
        {/* <div style={{ paddingLeft: "40px", color: "#333232ff" }}>
          <h3>
            <a href="https://captainmobile.my/service" class="custom-link">
              Dashboard
            </a>
          </h3>

          <a href="https://captainmobile.my/contactus" class="custom-link">
            Dashboard KPI 2025
          </a>
          <br />

          <a href="https://captainmobile.my/contactus" class="custom-link">
            Dashboard KPI 2026
          </a>
          <br />

          <a href="https://captainmobile.my/contactus" class="custom-link">
            Dashboard KPI 2025 vs 2026
          </a>
          <br />

          <h3>
            <a href="https://captainmobile.my/media" class="custom-link">
              KPI Daerah
            </a>
          </h3>

          <a
            href="https://www.tiktok.com/@captainmobilekuantan"
            class="custom-link"
          >
            KPI Daerah 2025
          </a>
          <br />
          <a
            href="https://www.instagram.com/captainmobilekuantan"
            class="custom-link"
          >
            KPI Daerah 2026
          </a>
          <br />
          <a
            href="https://www.facebook.com/captainmobile.kuantan"
            class="custom-link"
          >
            KPI Daerah 2025 vs 2026
          </a>
          <br />

          <h3>
            <a href="https://captainmobile.my/media" class="custom-link">
              KPI HQ
            </a>
          </h3>

          <h3>
            <a href="https://captainmobile.my/contactus" class="custom-link">
              Tetapan
            </a>
          </h3>

          <a href="https://kuantan.captainmobile.my/" class="custom-link">
            Cawangan Kuantan
          </a>
          <br />

          <a href="https://kemaman.captainmobile.my/" class="custom-link">
            Cawangan Kemaman
          </a>
          <br />
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: "#ecececff",
          fontSize: "10px",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        Copyright © 2025 - AsrarOthman. Semua hak cipta
        dilindungi.
      </div>
    </>
  );
};

export default Footer;
