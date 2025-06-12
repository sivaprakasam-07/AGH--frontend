import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #ffffff;   /* White header */
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 10px 20px;
  }
`;



export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  width: 170px;
  height: 48.44px;
`;

export const LogoText = styled.div`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;

  div:first-child {
    color: black;
  }

  div:last-child {
    color: black;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color:rgb(12, 12, 12);

  &:hover {
    color: #ff3d3d;
  }
`;

export const Spacer = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.transparent ? "#aaa" : "#ff3d3d")};
  color: #fff;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
