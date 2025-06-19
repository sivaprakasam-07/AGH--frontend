import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 32px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  margin-top: 40px;
`;

export const FormOverlay = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: #fff;
  border: 2px solid #f3f4f6;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  color: #374151;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
`;

export const PublishButton = styled.button`
  background: linear-gradient(135deg, #dc2626, #ea580c);
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
  background-color: #f9fafb;
  border: 2px dashed #d1d5db;
  padding: 24px;
  border-radius: 12px;
  margin-top: 32px;
  width: 100%;
  max-width: 400px;
  color: #1f2937;
  font-size: 16px;
  font-weight: 500;
`;
