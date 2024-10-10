import "./pages/Home/Home.css";

import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./services/storage";

function App() {
  createLocalStorage();

  console.log(getAllLocalStorage());

  changeLocalStorage({
    login: true,
  });

  return (
    <AppContextProvider>
      <MainRoutes />
    </AppContextProvider>
  );
}

export default App;
