import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/Components.css";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import Hero from "../components/Hero";
import axios from "axios";
import Hantar from "../components/Hantar";
import Terima from "../components/Terima";

const Dashboard = () => {
  // ------------------ TOKEN SETIAP PAGE ------------------
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      console.log("Token dari localStorage:", token);

      if (!token) {
        // navigate("/login");
        navigate("/home");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Data profil:", response.data);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("role0", response.data.role0);
      } catch (error) {
        console.error("Error fetch profile:", error);

        // Hanya remove token jika Unauthorized (401)
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("role0");
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [navigate]);
  // ------------------ END TOKEN ------------------
  const sampleData = [
    { datax: "Januari", pencapaian: 42, sasaran: 50, peratus: 84 },
    { datax: "Februari", pencapaian: 65, sasaran: 70, peratus: 93 },
    { datax: "Mac", pencapaian: 58, sasaran: 60, peratus: 97 },
    { datax: "April", pencapaian: 45, sasaran: 55, peratus: 82 },
    { datax: "Mei", pencapaian: 77, sasaran: 80, peratus: 96 },
    { datax: "Jun", pencapaian: 63, sasaran: 70, peratus: 90 },
    { datax: "Julai", pencapaian: 54, sasaran: 65, peratus: 83 },
    { datax: "Ogos", pencapaian: 72, sasaran: 75, peratus: 96 },
    { datax: "September", pencapaian: 60, sasaran: 68, peratus: 88 },
    { datax: "Oktober", pencapaian: 0, sasaran: 85, peratus: 0 },
    { datax: "November", pencapaian: 0, sasaran: 78, peratus: 0 },
    { datax: "Disember", pencapaian: 0, sasaran: 95, peratus: 0 },
  ];

  const sampleData1 = [
    { datax: "Geo Tanaman", pencapaian: 42, sasaran: 50, peratus: 84 },
  ];

  const sampleData2 = [
    { datax: "Permohonan ", pencapaian: 42, sasaran: 50, peratus: 84 },
    { datax: "Kelulusan ", pencapaian: 33, sasaran: 50, peratus: 66 },
  ];
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        // backgroundColor: "#70c682ff",
        backgroundImage:
          "linear-gradient(rgba(202, 217, 202, 0.5), rgba(204, 186, 186, 0.5))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Isi kandungan */}
      <main>
        {/* Hero Section */}
        <Hero />
        <div
          style={{
            position: "sticky",
            top: "50px",
            background: "rgba(244, 244, 244, 1)", // penting supaya tak nampak tembus
            padding: "20px",
            margin: "0",
            height: "30px",
            zIndex: 999, // pastikan dia atas elemen lain
            borderBottom: "1px solid #ddd",
          }}
        >
          <a style={{ fontSize: "18px", fontWeight: "600" }}>
            SalinJe.com - Buat Folder atau Salin Folder
          </a>
        </div>
        <br />
        {/* BOX2  */}

        <br />
        <a style={{ margin: "20px" }}></a>
        <div className="responsive-container">
          <div className="responsive-left">
            <InfoBox
              title="Buat Folder - Paste"
              boxContent={<Hantar />}
              height="auto"
            />
          </div>
          <div className="responsive-right">
            <InfoBox
              title="Salin Folder - Copy"
              boxContent={<Terima />}
              height="auto"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
