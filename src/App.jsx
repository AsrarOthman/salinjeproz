import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./components/AuthProvider";

// Import semua page AO
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Privasinterma from "./pages/Privasi&terma";
import TermsPrivacy from "./pages/TermsPrivacy";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Breadcrumb akan muncul di semua page kecuali login */}
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route
              path="*"
              element={
                <>
                  {/* <Breadcrumb /> */}
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/privasi&terma" element={<Privasinterma />} />
                    <Route path="/terms" element={<TermsPrivacy />} />
                    {/* kalau path tak wujud, redirect ke home */}
                    <Route path="*" element={<Dashboard />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
