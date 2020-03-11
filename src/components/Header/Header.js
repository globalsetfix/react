import React from "react";
import ButtonAppBar from "./ButtonAppBar/ButtonAppBar";

function Header() {
  const dataPage = {
    title: "ReactJS App",
    login: "Login"
  };

  return (
    <header>
      <ButtonAppBar projectName={dataPage} />
    </header>
  );
}

export default Header;
