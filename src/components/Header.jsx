import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  LogoImg,
  LogoText,
  Nav,
  NavLink,
  Spacer,
  ButtonGroup,
  Button,
} from "./Header.styles";

import logo from "../assets/logo.png";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      
    </LogoContainer>

    <Nav>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About us</NavLink>
      <NavLink href="#">Our Services</NavLink>
      <NavLink href="#">My courses</NavLink>
      <NavLink href="#"> Quizzes</NavLink>

    </Nav>

    <Spacer />

    <ButtonGroup>
      <Button transparent>Login</Button>
      <Button>Sign up</Button>
    </ButtonGroup>
  </HeaderContainer>
);

export default Header;
