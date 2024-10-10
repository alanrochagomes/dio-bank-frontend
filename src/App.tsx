import "./pages/Home/Home.css";

import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  !getAllLocalStorage() && createLocalStorage();

  return (
    <AppContextProvider>
      <MainRoutes />
    </AppContextProvider>
  );
}

export default App;
