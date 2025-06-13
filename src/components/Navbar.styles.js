import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e1e1e;
  padding: 0 16px;
  height: 48px;
  color: #ffffff;
  font-family: sans-serif;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding: 8px;
  }
`;

export const Logo = styled.div`
  font-size: 20px;
  margin-right: 24px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-grow: 1;
  max-width: 700px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 8px;
  }
`;

export const NavLink = styled.div`
  color: #ccc;
  cursor: pointer;
  font-size: 14px;

  &.active {
    font-weight: bold;
    color: white;
  }
  
  &.store {
    color: orange;
    font-weight: 450;
  }


  &:hover {
    color: white;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-top: 8px;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const AuthText = styled.span`
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const PremiumButton = styled.button`
  background-color: #2f2a1f;
  color: orange;
  border: none;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #3b3426;
  }
`;
