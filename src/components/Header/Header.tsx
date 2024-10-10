import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Header/Header.css";
import diobankLogo from "../../assets/img/diobank.png";

import { AppContext } from "../../components/AppContext";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { changeLocalStorage } from "../../services/storage";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Flex backgroundColor="#FFFFFF" padding="5px">
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
          </ul>
        </nav>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </header>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
