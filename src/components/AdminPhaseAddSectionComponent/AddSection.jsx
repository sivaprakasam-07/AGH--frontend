import React, { useState } from 'react';
import {
  Container,
  AddSectionButton,
  FormOverlay,
  Input,
  Label,
  Select,
  PublishButton,
  PlaceholderCard,
} from './AddSection';

const AddSection = ({ setTriggerAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [topic, setTopic] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionCode, setQuestionCode] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handlePublish = () => {
    if (sectionName && topic && questionType) {
      if (questionType === 'Add Existing Question' && !questionCode) {
        alert('Please enter question code');
        return;
      }
      const newSection = { sectionName, topic, questionType, questionCode };

      if (editIndex !== null) {
        const updated = [...sections];
        updated[editIndex] = newSection;
        setSections(updated);
        setEditIndex(null);
      } else {
        setSections((prev) => [...prev, newSection]);
      }

      setSectionName('');
      setTopic('');
      setQuestionType('');
      setQuestionCode('');
      setShowForm(false);

      if (questionType === 'Add New Question') {
        setTriggerAdd(true);
      }
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleEdit = (index) => {
    const section = sections[index];
    setSectionName(section.sectionName);
    setTopic(section.topic);
    setQuestionType(section.questionType);
    setQuestionCode(section.questionCode || '');
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (indexToRemove) => {
    const updatedSections = sections.filter((_, index) => index !== indexToRemove);
    setSections(updatedSections);
    if (editIndex === indexToRemove) {
      setEditIndex(null);
    }
  };

  return (
    <Container>
      <AddSectionButton onClick={() => {
        setSectionName('');
        setTopic('');
        setQuestionType('');
        setQuestionCode('');
        setEditIndex(null);
        setShowForm(!showForm);
      }}>
        {showForm ? 'Close Form' : 'Add Section'}
      </AddSectionButton>

      {showForm && (
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

          {questionType === 'Add Existing Question' && (
            <>
              <Label htmlFor="questionCode">Enter Question Code</Label>
              <Input
                id="questionCode"
                value={questionCode}
                onChange={(e) => setQuestionCode(e.target.value)}
                placeholder="e.g. Q12345"
              />
            </>
          )}

          <PublishButton onClick={handlePublish}>
            {editIndex !== null ? 'Update' : 'Publish'}
          </PublishButton>
        </FormOverlay>
      )}

      {sections.map((section, index) => (
        <PlaceholderCard key={index}>
          <p><strong>{section.sectionName}</strong></p>
          <p>{section.topic}</p>
          <p>{section.questionType}</p>
          {section.questionType === 'Add Existing Question' && (
            <p>Code: {section.questionCode}</p>
          )}
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => handleEdit(index)}
              style={{
                backgroundColor: '#facc15',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: '#ef4444',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '5px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        </PlaceholderCard>
      ))}
    </Container>
  );
};

export default AddSection;
