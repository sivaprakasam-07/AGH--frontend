import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0d0d0d;
`;

export const Container = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 16px;
  border-radius: 12px;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 8px;
`;

export const Tab = styled.div`
  cursor: pointer;
  color: ${(props) => (props.$active ? '#ffffff' : '#aaaaaa')};
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: white;
  }
`;

export const ViewAll = styled.a`
  color: #aaa;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const ScrollableList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  background-color: #2a2a2a;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`;

export const Title = styled.div`
  font-size: 1rem;
  color: #ffffff;
`;

export const Time = styled.div`
  font-size: 0.85rem;
  color: #aaaaaa;
`;
