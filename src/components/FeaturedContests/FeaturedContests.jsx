import React from 'react';
import { Section, Title, CardRow, ContestBox } from './FeaturedContests';

const FeaturedContests = () => {
  return (
     <Section>
      <Title>Featured Contests</Title>
      <CardRow>
        <ContestBox>Biweekly 159</ContestBox>
        <ContestBox>Weekly 454</ContestBox>
        <ContestBox>Weekly 453</ContestBox>
      </CardRow>
    </Section>
  )
}

export default FeaturedContests
