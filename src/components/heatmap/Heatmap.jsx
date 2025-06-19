import React from "react";
import {
  HeatmapContainer,
  Info,
  MonthLabels,
  YearGrid,
  MonthGrid,
  Day,
  Legend,
} from "./heatmap.styles";
import { getColorForValue } from "../../utils/color";

const groupByMonth = (data) => {
  const grouped = Array.from({ length: 12 }, () => []);
  data.forEach((entry) => {
    const month = new Date(entry.date).getMonth();
    grouped[month].push(entry);
  });
  return grouped;
};

const Heatmap = ({ data }) => {
  const grouped = groupByMonth(data);
  const total = data.reduce((sum, d) => sum + d.count, 0);
  const maxStreak = 54;

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  return (
    <HeatmapContainer>
      <Info>
        <strong>{total}:submissions in 2025</strong>
        <span>Max streak: <strong>{maxStreak}</strong></span>
      </Info>

      <MonthLabels>
        {months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </MonthLabels>

      <YearGrid>
        {grouped.map((month, idx) => (
          <MonthGrid key={idx}>
            {month.map((day, i) => (
              <Day
                key={i}
                color={getColorForValue(day.count)}
                title={`${day.date} - ${day.count} submissions`}
                onClick={() => alert(`${day.date} clicked!`)}
              />
            ))}
          </MonthGrid>
        ))}
      </YearGrid>

      <Legend>
        <span>Less</span>
        {[0, 2, 4, 6, 8].map((val) => (
          <Day key={val} color={getColorForValue(val)} />
        ))}
        <span>More</span>
      </Legend>
    </HeatmapContainer>
  );
};

export default Heatmap;