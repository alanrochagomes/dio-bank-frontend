import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import diobankLogo from "../../assets/img/diobank.png";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={diobankLogo} alt="Logo Diobank" />
      </div>
      <nav className="navbar">
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/conta">Conta</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
    </header>
  );
};
