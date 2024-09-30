import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./pages/Home/Home.css";
import Login from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
import Conta from "./pages/Conta/Conta";
import ContaInfo from "./pages/ContaInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/conta" element={<Conta />} /> */}
        <Route path="/conta/:id" element={<Conta />} />
        <Route path="/infoconta" element={<ContaInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
