import React from "react";
import ButtonAppBar from "./ButtonAppBar/ButtonAppBar";

function Header() {
  
  const dataPage = {
      
    title : 'Your Best Travels'

  }  

  return (
    <header>
      <ButtonAppBar projectName={dataPage.title} />
    </header>
  );
}

export default Header;
