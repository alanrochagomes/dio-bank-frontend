import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Conta from "./pages/Conta/Conta";
import ContaInfo from "./pages/ContaInfo";
import { AppContext } from "./components/AppContext";
import { useContext } from "react";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Login />} />
        <Route path="/infoconta" element={<ContaInfo />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
