import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./pages/Home/Home.css";
import Login from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
import Conta from "./pages/Conta/Conta";
import ContaInfo from "./pages/ContaInfo";
import { AppContextProvider } from "./components/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/conta/:id" element={<Conta />} />
          <Route path="/infoconta" element={<ContaInfo />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
