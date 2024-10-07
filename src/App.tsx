import "./pages/Home/Home.css";

import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";

function App() {
  return (
    <AppContextProvider>
      <MainRoutes />
    </AppContextProvider>
  );
}

export default App;
