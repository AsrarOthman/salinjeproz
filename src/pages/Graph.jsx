import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin !== "ICT") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}

 
      <Header handleLogout={handleLogout} />

      {/* Isi kandungan */}
      <main style={{ padding: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Selamat Datang ke Graph</h2>
        <p>Sila pilih menu di atas untuk navigasi sistem sensori anda.</p>

      </main>
    </div>
  );
};

// Komponen untuk pautan menu
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      color: "#1f2937",
      textDecoration: "none",
      fontWeight: "500",
      padding: "0.5rem 0.75rem",
      borderRadius: "6px",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e0e0")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
  >
    {label}
  </Link>
);

export default Home;
