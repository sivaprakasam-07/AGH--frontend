import React, { useState } from "react";
import {
  SidebarContainer,
  Section,
  SectionTitle,
  NavItem,
  NavIcon,
  NavText,
  SubSection,
  SubItem,
  ToggleButton,
  LockIcon,
  FavoriteIconWrapper
} from "./Sidebar.styles";
import { Book, GraduationCap, Star, Plus, ChevronDown, Lock } from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <ToggleButton onClick={() => setCollapsed(!collapsed)}>
        ☰
      </ToggleButton>

      <SidebarContainer collapsed={collapsed}>
        <Section>
          <NavItem active>
            <NavIcon>
              <Book size={18} />
            </NavIcon>
            <NavText>Library</NavText>
          </NavItem>
          <NavItem>
            <NavIcon>
              <GraduationCap size={18} />
            </NavIcon>
            <NavText>Study Plan</NavText>
          </NavItem>
        </Section>

        <hr />

        <SubSection>
          <SectionTitle>
            <span>My Lists</span>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Plus size={14} />
              <ChevronDown size={14} />
            </div>
          </SectionTitle>

          <SubItem>
            <NavIcon>
            <FavoriteIconWrapper>
                <Star size={14} color="#f9ae00" fill="#f9ae00" />
            </FavoriteIconWrapper>
            </NavIcon>

            <NavText>Favorite</NavText>
            <LockIcon>
              <Lock size={14} />
            </LockIcon>
          </SubItem>
        </SubSection>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
