import React, { useState ,useEffect} from 'react';
import {
  ProblemContainer,
  AddBtn,
  ProblemList,
  ProblemCard,
  Overlay,
  Modal,
  Textarea,
  SubmitBtn,
  DeleteBtn,
  CloseBtn
} from './AddProblem';

function AddProblem({ triggerAdd, setTriggerAdd }) {
  const [problems, setProblems] = useState([]);
  const [formData, setFormData] = useState({ topic: '', statement: '', input: '', output: '', testcases: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  useEffect(() => {
    if (triggerAdd) {
      setShowForm(true);
      setTriggerAdd(false);
    }
  }, [triggerAdd]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...problems];
      updated[editingIndex] = formData;
      setProblems(updated);
      setEditingIndex(null);
    } else {
      setProblems([...problems, formData]);
    }
    setFormData({ topic: '', statement: '', input: '', output: '', testcases: '' });
    setShowForm(false);
    setTriggerAdd(false);
  };

  const handleEdit = (index) => {
    setFormData(problems[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = problems.filter((_, i) => i !== index);
    setProblems(updated);
  };

  React.useEffect(() => {
    if (triggerAdd) setShowForm(true);
  }, [triggerAdd]);

  return (
    <ProblemContainer>
      <AddBtn onClick={() => setShowForm(true)}>Add New Problem</AddBtn>
      {showForm && (
        <Overlay>
          <Modal>
            <CloseBtn onClick={() => setShowForm(false)}>✖</CloseBtn>
            <form onSubmit={handleSubmit}>
              <Textarea name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange} required />
              <Textarea name="statement" placeholder="Statement" value={formData.statement} onChange={handleChange} required />
              <Textarea name="input" placeholder="Input Format" value={formData.input} onChange={handleChange} required />
              <Textarea name="output" placeholder="Output Format" value={formData.output} onChange={handleChange} required />
              <Textarea name="testcases" placeholder="Test Cases" value={formData.testcases} onChange={handleChange} required />
              <SubmitBtn type="submit">{editingIndex !== null ? 'Update' : 'Publish'}</SubmitBtn>
            </form>
          </Modal>
        </Overlay>
      )}
      <ProblemList>
        {problems.map((prob, i) => (
          <ProblemCard key={i}>
            <h4>{prob.topic}</h4>
            <p>{prob.statement}</p>
            <p><strong>Input:</strong> {prob.input}</p>
            <p><strong>Output:</strong> {prob.output}</p>
            <p><strong>Testcases:</strong> {prob.testcases}</p>
            <SubmitBtn onClick={() => handleEdit(i)}>Edit</SubmitBtn>
            <DeleteBtn onClick={() => handleDelete(i)}>Delete</DeleteBtn>
          </ProblemCard>
        ))}
      </ProblemList>
    </ProblemContainer>
  );
}

export default AddProblem;
