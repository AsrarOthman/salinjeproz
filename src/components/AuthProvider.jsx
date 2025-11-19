import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Membuat konteks untuk autentikasi
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mengambil profil pengguna menggunakan token dari localStorage
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      console.log("Token yang disimpan:", token); // Debugging: Semak token

      if (!token) {
        setUser({ username: "User" });
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Data profil pengguna:", response.data); // Debugging: Semak data profil
        setUser(response.data); // Menyimpan data pengguna dalam konteks
      } catch (error) {
        console.error("Error fetching profile:", error);
        localStorage.removeItem("token"); // Hapuskan token jika ada ralat
        setUser({ username: "User" });
      }
    };

    fetchProfile();
  }, []); // Memastikan hanya dipanggil sekali semasa muatkan halaman

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
