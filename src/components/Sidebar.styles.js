import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.collapsed ? "0" : "220px")};
  background-color: #1e1e1e;
  color: white;
  padding: ${(props) => (props.collapsed ? "0" : "16px")};
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 48px;
  left: 0;
  z-index: 999;

  @media (max-width: 768px) {
    position: absolute;
  }
`;

export const ToggleButton = styled.button`
  background-color: #1e1e1e;
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? "#2a2a2a" : "transparent")};
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: #2f2f2f;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const NavText = styled.div`
  font-size: 14px;
  color: #fff;
`;

export const SubSection = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
`;

export const SubItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #2a2a2a;
  }
`;

export const LockIcon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const FavoriteIconWrapper = styled.div`
  background-color: white;
  padding: 2px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20000px;
  height: 20px;
`;

