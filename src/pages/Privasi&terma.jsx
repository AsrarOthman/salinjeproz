import { ImportIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TermsPrivacy from "./TermsPrivacy";

const ContactUs = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const admin = localStorage.getItem("admin");
  //   if (admin !== "ICT") {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem("admin");
  //   navigate("/login");
  // };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "400px",
        backgroundImage: "url('/src/assets/.jpeg')",
        backgroundSize: "cover", // supaya penuh
        backgroundPosition: "start ", // fokus tengah
        backgroundRepeat: "no-repeat", // tak ulang
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Header */}

      <Header />

      {/* Isi kandungan */}
      <main style={{ backgroundColor: "#686868ff" }}>
        <div
          style={{
            height: "300px",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/paper.jpg')",
            backgroundSize: "cover", // supaya penuh
            backgroundPosition: "center ", // fokus tengah
            backgroundRepeat: "no-repeat", // tak ulang

            minHeight: "300px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "700px" }}>
            <h2
              style={{
                marginBottom: "0.5rem",
                color: "white",
                fontSize: "2.5rem",
                padding: "20px",
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  marginBottom: "0.5rem",
                  color: "white",
                  fontSize: "2rem",
                  padding: "20px",
                  marginTop: "-20px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h2 style={{ color: "black" }}>SALIN</h2>
                <h2 style={{ color: "red" }}>JE</h2>
                <h2>.COM</h2>
              </div>
            </h2>
            <div style={{ paddingLeft: "20px" }}>
              <a
                style={{
                  color: "white",
                  lineHeight: "1.6",
                  background: "rgba(0, 0, 0, 0.5)",
                  textAlign: "justify",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                “Dasar Privasi & Terma Perkhidmatan"
              </a>
            </div>
          </div>
        </div>
        <div style={{ margin: "20px" }}>
          <TermsPrivacy />
          <br />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
