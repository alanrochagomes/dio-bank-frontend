import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/css/App.css";
import Login from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <div className="hero-content">
                    <h1>
                      Bem-vindo ao Dio<span className="ponto">.</span> Bank
                    </h1>
                    <p>Soluções financeiras que conectam você ao futuro.</p>
                    <a href="#services" className="cta-button">
                      Nossos Serviços
                    </a>
                  </div>
                </section>

                <section id="services" className="services">
                  <h2>O que oferecemos</h2>
                  <div className="service-cards">
                    <div className="service-card">
                      <h3>Conta Corrente</h3>
                      <p>
                        Abra sua conta corrente e aproveite nossos benefícios
                        exclusivos.
                      </p>
                    </div>
                    <div className="service-card">
                      <h3>Empréstimos</h3>
                      <p>Crédito rápido e fácil para o que você precisar.</p>
                    </div>
                    <div className="service-card">
                      <h3>Investimentos</h3>
                      <p>
                        Faça seu dinheiro trabalhar para você com nossas opções
                        de investimento.
                      </p>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
