import styled from 'styled-components';

export const Container = styled.div`
  background-color: #111827; /* dark background */
  padding: 32px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 24px;
  color: white;
`;

export const AddSectionButton = styled.button`
  background: linear-gradient(135deg, #dc2626, #ea580c);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const FormOverlay = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: #1f2937; /* dark form background */
  border: 2px solid #374151;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  border: 2px solid #4b5563;
  border-radius: 8px;
  background-color: #f9fafb;
  color: #111827;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  color: #f3f4f6;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #4b5563;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9fafb;
  color: #111827;
`;

export const PublishButton = styled.button`
  background: linear-gradient(135deg, #16a34a, #22c55e);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  display: block;
`;

export const PlaceholderCard = styled.div`
  background-color: #1f2937;
  border: 2px dashed #9ca3af;
  padding: 24px;
  border-radius: 12px;
  margin-top: 32px;
  width: 100%;
  max-width: 400px;
  color: #f3f4f6;
  font-size: 16px;
  font-weight: 500;
`;