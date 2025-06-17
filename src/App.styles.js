import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
  color: white;
  padding-top: 60px; /* height of the fixed navbar */
  margin-left: 220px; /* width of the sidebar */

  font-family: sans-serif;

  @media (max-width: 768px) {
    margin-left: 0; /* no sidebar on mobile unless opened */
    padding-top: 64px;
  }
`;
