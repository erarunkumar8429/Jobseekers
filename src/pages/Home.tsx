import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <> <h1 style={{color:"red",textAlign:"center"}}>welcome To Home Page .........</h1>
   
   </>
  
  );
};

export default Header;
