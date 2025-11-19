import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo-salinje.png";
import ScrollNavLink from "./ScrollNavLink";
import "./Components.css";



const Header = ({ handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#ffffffff",
        borderBottom: "1px solid #cacacaff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "20px",
      }}
    >
      {/* Logo + Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="JPNP Logo"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={() => navigate("/home")} // klik gambar balik ke Home
        />
        <div style={{}}> <h3>Paste & Copy Systems</h3></div>

        {/* Hamburger menu (phone only) */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            cursor: "pointer",
            marginLeft: "auto",
          }}
          className="menu-btn"
        >
          <span
            style={{ width: "25px", height: "3px", background: "#333" }}
          ></span>
          <span
            style={{ width: "25px", height: "3px", background: "#333" }}
          ></span>
          <span
            style={{ width: "25px", height: "3px", background: "#333" }}
          ></span>
        </div>

        {/* Menu links */}
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ScrollNavLink to="/home" label="Home" />

          {/* <div className="dropdown">
            <ScrollNavLink to="/dashboard" label="Dashboard" />
            <div className="dropdown-content">
              <ScrollNavLink to="/dashboard/2025" label="Tahun 2025" />
              <ScrollNavLink to="/dashboard/2026" label="Tahun 2026" />
              <ScrollNavLink to="/dashboard/compare" label="Perbandingan" />
            </div>
          </div> */}

          {/* <div className="dropdown">
            <ScrollNavLink to="/kpidaerah" label="KPI Daerah" />
            <div className="dropdown-contentA">
              <ScrollNavLink to="/kpidaerah/2025" label="Tahun 2025" />
              <ScrollNavLink to="/kpidaerah/2026" label="Tahun 2026" />
              <ScrollNavLink to="/kpidaerah/compare" label="Perbandingan" />
            </div>
          </div> */}
{/* 
          <ScrollNavLink to="/media" label="KPI HQ" /> */}
          <ScrollNavLink to="/privasi&terma" label="Privasi & Terma" />
        </nav>
      </div>

      {/* Butang keluar */}
      {/* <button
        onClick={handleLogout}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Keluar
      </button> */}

      {/* CSS Responsive */}
      <style>
        {`
          @media (max-width: 768px) {
            .menu-btn {
              display: flex !important;
            }
            .menu {
              display: ${menuOpen ? "flex" : "none"};
              flex-direction: column;
              position: absolute;
              top: 50px;
              right: 0px;
              background: #dadadaff;
              padding: 10px 20px;
              // border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              z-index: 999;
            }
            .menu a {
              margin: 0px 0;
            }
          }
          @media (min-width: 769px) {
            .menu {
              display: flex !important;
              gap: 1.5rem;
            }
          }
        `}
      </style>
    </header>
    
  );
};

export default Header;
