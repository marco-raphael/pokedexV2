import { useNavigate } from "react-router-dom";

export const useCoordinator = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToDetail = (name) => {
    navigate(`/detail/${name}`);
  };

  const goToPokedex = () => {
    navigate("/pokedex");
  };

  return { goToHome, goToDetail, goToPokedex };
};
