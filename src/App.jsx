import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./authContext";

function App() {
  return (
    <AuthProvider>
      {/* Wrap your application in Router */}
      <Router>
        <Header />
        <div className="w-full h-screen flex flex-col">
          {/* Define routes directly using Routes and Route components */}
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
