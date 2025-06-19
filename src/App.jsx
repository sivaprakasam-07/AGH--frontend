import React, { useState } from 'react';
import { Container, AddSectionButton, PlaceholderCard } from './formcomponents/form';
import Form from './formcomponents/form.jsx';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [sections, setSections] = useState([]);

  const handleAddSection = (newSection) => {
    if (newSection.sectionName && newSection.topic && newSection.questionType) {
      setSections((prevSections) => [...prevSections, newSection]);
      setShowForm(false);
    } else {
      alert('Please fill all fields');
    }
  };

  const handleDelete = (indexToRemove) => {
    const updatedSections = sections.filter((_, index) => index !== indexToRemove);
    setSections(updatedSections);
  };

  return (
    <Container>
      <AddSectionButton onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Section'}
      </AddSectionButton>

      {showForm && (
        <Form onSubmit={handleAddSection} onClose={() => setShowForm(false)} />
      )}

      {sections.map((section, index) => (
        <PlaceholderCard key={index}>
          <p><strong>Section:</strong> {section.sectionName}</p>
          <p><strong>Topic:</strong> {section.topic}</p>
          <p><strong>Type:</strong> {section.questionType}</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
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
}
