import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import logo from "../assets/logo-salinje.png";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      navigate("/Home");
    } catch (error) {
      alert("Login gagal! Periksa username dan password.");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Empat gambar bergerak */}
      {/* <img src={float1} alt="Floating1" className="floating-image floating1" />
      <img src={float2} alt="Floating2" className="floating-image floating2" />
      <img src={float3} alt="Floating3" className="floating-image floating3" />
      <img src={float4} alt="Floating4" className="floating-image floating4" /> */}

      <div className="login-box">
        <img src={logo} alt="Logo Pertanian" className="logo-login" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
