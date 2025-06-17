import React from "react";
import {
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  RightSection,
  AuthText,
  PremiumButton,
} from "./Navbar.styles";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <img src={logo} alt="Logo" style={{ height: "24px" }} />
      </Logo>
      <NavLinks>
        <NavLink>Explore</NavLink>
        <NavLink className="active">Problems</NavLink>
        <NavLink>Contest</NavLink>
        <NavLink>Discuss</NavLink>
        <NavLink>Interview ⌄</NavLink>
       <NavLink className="store">Store ⌄</NavLink>
      </NavLinks>
      <RightSection>
        <AuthText>Register</AuthText>
        <span>or</span>
        <AuthText>Sign in</AuthText>
        <PremiumButton>Premium</PremiumButton>
      </RightSection>
    </NavContainer>
  );
};

export default Navbar;
