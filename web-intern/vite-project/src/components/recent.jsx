import React, { useState } from 'react';
import {
  PageWrapper,
  Container,
  TabsWrapper,
  Tabs,
  Tab,
  ViewAll,
  ScrollableList,
  Item,
  Title,
  Time
} from "../styles/recent.styles";
import { FaCheckCircle, FaCommentAlt, FaLightbulb, FaListUl } from 'react-icons/fa';

const Recent = () => {
  const [activeTab, setActiveTab] = useState('Recent AC');

  const questions = [
    { title: 'Maximum Difference Between Adjacent Elements in a Circular Array', time: '21 hours ago' },
    { title: 'Remove Linked List Elements', time: '21 hours ago' },
    { title: 'Odd Even Linked List', time: 'a day ago' },
    { title: 'Strictly Palindromic Number', time: '4 days ago' },
    { title: 'Vowels Game in a String', time: '5 days ago' },
    { title: 'Nim Game', time: '5 days ago' },
    { title: 'Divisor Game', time: '5 days ago' },
    { title: 'Bulb Switcher', time: '5 days ago' },
    { title: 'Top K Frequent Words', time: '5 days ago' },
    { title: 'K-th Smallest in Lexicographical Order', time: '5 days ago' },
    { title: 'Longest Common Prefix', time: '5 days ago' },
    { title: 'Implement Trie (Prefix Tree)', time: '5 days ago' },
    { title: 'Lexicographically Smallest Palindrome', time: '5 days ago' },
    { title: 'Lexicographical Numbers', time: '5 days ago' },
    { title: 'Lexicographically Minimum String After Removing Stars', time: '6 days ago' },
  ];

  return (
    <PageWrapper>
      <Container>
        <TabsWrapper>
          <Tabs>
            <Tab $active={activeTab === 'Recent AC'} onClick={() => setActiveTab('Recent AC')}>
              <FaCheckCircle /> Recent AC
            </Tab>
            <Tab $active={activeTab === 'List'} onClick={() => setActiveTab('List')}>
              <FaListUl /> List
            </Tab>
            <Tab $active={activeTab === 'Solutions'} onClick={() => setActiveTab('Solutions')}>
              <FaLightbulb /> Solutions
            </Tab>
            <Tab $active={activeTab === 'Discuss'} onClick={() => setActiveTab('Discuss')}>
              <FaCommentAlt /> Discuss
            </Tab>
          </Tabs>
          <ViewAll as="span">View all submissions →</ViewAll>

        </TabsWrapper>

        <ScrollableList>
          {questions.map((question, index) => (
            <Item key={index}>
              <Title>{question.title}</Title>
              <Time>{question.time}</Time>
            </Item>
          ))}
        </ScrollableList>
      </Container>
    </PageWrapper>
  );
};

export default Recent;
