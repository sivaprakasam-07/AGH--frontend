import React from 'react';
import { Section, Title, RankingList, RankingItem } from './Rankings';

const Rankings = () => {
  return (
    <Section>
      <Title>Top Global Rankings</Title>
      <RankingList>
        <RankingItem>#1: Alice</RankingItem>
        <RankingItem>#2: Bob</RankingItem>
        <RankingItem>#3: Charlie</RankingItem>
      </RankingList>
    </Section>
  )
}

export default Rankings
