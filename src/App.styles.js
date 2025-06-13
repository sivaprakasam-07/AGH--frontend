import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
  color: white;
  padding-top: 48px; /* height of the fixed navbar */

  @media (max-width: 768px) {
    padding-top: 64px; /* give more space if navbar wraps on small screens */
  }

  font-family: sans-serif;
`;
