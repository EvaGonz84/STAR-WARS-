import React, { useState } from "react";
import {
  HeaderContainer,
  NavbarLink,
  NavContainer,
  NavbarLinkHeader,
  HeaderDiv,
  LinksContainer,
  BurgerIcon,
} from "./Navbar.styles";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <HeaderContainer>
        <HeaderDiv onClick={() => setShowMenu(!showMenu)}>
          <BurgerIcon />
        </HeaderDiv>
        <img
          src={require("../Images/star-wars-logo.jpg")}
          alt="star wars logo"
          width={"200px"}
        ></img>
        <LinksContainer>
          <NavbarLinkHeader>LOG IN</NavbarLinkHeader>

          <NavbarLinkHeader>SIGN UP</NavbarLinkHeader>
        </LinksContainer>
      </HeaderContainer>
      <NavContainer open={showMenu}>
        <NavbarLink onClick={() => setShowMenu(!showMenu)} to="/">
          HOME
        </NavbarLink>
        <NavbarLink onClick={() => setShowMenu(!showMenu)} to="/starships">
          STARSHIPS
        </NavbarLink>
      </NavContainer>
    </div>
  );
};

export default Navbar;
