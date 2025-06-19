import styled from "styled-components";

export const HeatmapContainer = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 0.5rem 1rem 1rem;
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 95%;
`;

export const MonthLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  width: 95%;
  padding: 0 10px;
`;

export const YearGrid = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  overflow-x: auto;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  gap: 3px;
`;

export const Day = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.15);
  }
`;

export const Tooltip = styled.div``;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  font-size: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;
