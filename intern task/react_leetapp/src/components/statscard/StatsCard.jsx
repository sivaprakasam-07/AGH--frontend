import React from "react";
import {
  CardContainer,
  Title,
  ContentRow,
  LeftRing,
  RingSvg,
  CenterText,
  Label,
  Count,
  StatsList,
  StatRow,
  StatLabel,
  StatProgressTrack,
  StatProgressFill,
  BeatRate,
} from "./StatsCard.styles.js";

const StatsCard = ({ solved = 0, total = 3000, stats = [] }) => {
  const circumference = 2 * Math.PI * 48;
  const percent = Math.min((solved / total) * 100, 100);
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <CardContainer>
      <Title>Solved Problems</Title>
      <ContentRow>
        <LeftRing>
          <RingSvg viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="48"
              stroke="#444"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="48"
              stroke="#ffb400"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
            <CenterText x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
              <Count>{solved}</Count>
              <Label>Solved</Label>
            </CenterText>
          </RingSvg>
        </LeftRing>

        <StatsList>
          {stats.map(({ label, solved, total, beat, color }, idx) => (
            <StatRow key={idx}>
              <StatLabel>
                <span>{label}</span>
                <strong>{solved}</strong> / {total}
                <BeatRate>{beat}</BeatRate>
              </StatLabel>
              <StatProgressTrack>
               <StatProgressFill color={color} width={`${(solved / total) * 100}%`} />

              </StatProgressTrack>
            </StatRow>
          ))}
        </StatsList>
      </ContentRow>
    </CardContainer>
  );
};

export default StatsCard;