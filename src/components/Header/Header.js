import React from "react";
import ButtonAppBar from "./ButtonAppBar/ButtonAppBar";

function Header() {
  
  const dataPage = {
      
    title : 'GoTravel'

  }  

  return (
    <header>
      <ButtonAppBar projectName={dataPage.title} />
    </header>
  );
}

export default Header;
