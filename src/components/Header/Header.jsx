import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { HeaderWrapper, Title, TrophyIcon } from './Header';

const Header = () => {
  return (
    <HeaderWrapper>
      <TrophyIcon><FaTrophy /></TrophyIcon>
      <Title>LeetCode Contest</Title>
    </HeaderWrapper>
  )
}

export default Header