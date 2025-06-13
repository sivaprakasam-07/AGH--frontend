import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* use center if you want vertical centering too */
  min-height: 100vh;
  background-color: #1e1e1e;
  padding: 2rem;
`;

// Optional wrapper for central alignment of inner content
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Centered with max width */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
