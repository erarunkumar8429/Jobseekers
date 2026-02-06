import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <> <h1 style={{color:"red",textAlign:"center"}}>welcome To Home Page .........</h1>
    <Link to="/dashboard">
        Go to Dashboard
      </Link>
   </>
  
  );
};

export default Header;
