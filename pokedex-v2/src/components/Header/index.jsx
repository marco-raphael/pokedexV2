import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/logo.png";
import { Headerstyle, Button, Button2 } from "./style";
import { useCoordinator } from "../../Router/useCoordinator";

function Header() {
  const { goToHome } = useCoordinator();

  const buttonn = () => {
    switch (navigate.location.pathname) {
      case "/":
        return (
          <div>
            <Button2 onClick={() => goToPokedex(navigate)}>Ver pokedex</Button2>
          </div>
        );
      default:
        return (
          <div>
            <Button2 onClick={() => goToHome}>Voltar</Button2>
          </div>
        );
    }
  };

  return (
    <Headerstyle>
      <Button onClick={goToHome}>
        <img src={logo} alt={"logo pokedex"} />
      </Button>
      {buttonn()}
    </Headerstyle>
  );
}

export default Header;
