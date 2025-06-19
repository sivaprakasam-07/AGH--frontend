import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 1rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 0 0 1.5rem;
  font-size: 1.2rem;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LeftRing = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

export const RingSvg = styled.svg`
  width: 120px;
  height: 120px;
`;

export const CenterText = styled.text`
  fill: ${({ theme }) => theme.text};
`;

export const Count = styled.tspan`
  font-size: 22px;
  font-weight: bold;
  x: 50%;
  dy: -0.2em;
`;

export const Label = styled.tspan`
  font-size: 12px;
  x: 50%;
  dy: 1.6em;
  fill: #aaa;
`;

export const StatsList = styled.div`
  flex: 1;
`;

export const StatRow = styled.div`
  margin-bottom: 1.2rem;
`;

export const StatLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  gap: 0.5rem;
  flex-wrap: wrap;

  strong {
    margin: 0 0.25rem;
  }
`;

export const BeatRate = styled.span`
  background: #eeeeee20;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
`;

export const StatProgressTrack = styled.div`
  background: #ccc;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

export const StatProgressFill = styled.div`
  height: 100%;
  background-color: ${({ color }) => color || "#4caf50"};
  width: ${({ width }) => width || "0%"};
  transition: width 0.4s ease;
  border-radius: 5px;
`;