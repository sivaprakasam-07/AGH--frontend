import styled from 'styled-components';

export const ProblemContainer = styled.div`
  flex: 1;
  background-color: #000;
  color: white;
  padding: 20px;
  min-height: 100vh;
`;

export const AddBtn = styled.button`
  background: linear-gradient(to right, #dc2626, #ea580c);
  color: white;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const ProblemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ProblemCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  color: black;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  color: black;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const SubmitBtn = styled.button`
  background: linear-gradient(to right, #16a34a, #22c55e);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

export const DeleteBtn = styled(SubmitBtn)`
  background: linear-gradient(to right, #7f1d1d, #dc2626);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;