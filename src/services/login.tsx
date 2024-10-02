import { useContext } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";

export const login = async (email: string): Promise<void> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setIsLoggedIn } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const data: any = await api;

  if (email !== data.email) {
    return alert("Email inválido");
  }

  setIsLoggedIn(true);
  navigate(`/${data.id}`);
};
