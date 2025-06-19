import React, { useState } from 'react';
import {
  FormOverlay,
  Input,
  Label,
  Select,
  PublishButton
} from './Form';

export default function Form({ onSubmit, onClose }) {
  const [sectionName, setSectionName] = useState('');
  const [topic, setTopic] = useState('');
  const [questionType, setQuestionType] = useState('');

  const handlePublish = () => {
    if (sectionName && topic && questionType) {
      onSubmit({ sectionName, topic, questionType });
      setSectionName('');
      setTopic('');
      setQuestionType('');
      onClose();
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <FormOverlay>
      <Label htmlFor="sectionName">Section Name</Label>
      <Input
        id="sectionName"
        value={sectionName}
        onChange={(e) => setSectionName(e.target.value)}
        placeholder="Enter section name"
      />

      <Label htmlFor="topicSelect">Select Topic</Label>
      <Select
        id="topicSelect"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      >
        <option value="">-- Choose a topic --</option>
        <option>Permutation & Combination</option>
        <option>List</option>
        <option>Array</option>
        <option>Strings</option>
        <option>Linked List</option>
      </Select>

      <Label htmlFor="questionSelect">Select Question Type</Label>
      <Select
        id="questionSelect"
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
      >
        <option value="">-- Choose question option --</option>
        <option>Add New Question</option>
        <option>Add Existing Question</option>
      </Select>

      <PublishButton onClick={handlePublish}>Publish</PublishButton>
    </FormOverlay>
  );
}
