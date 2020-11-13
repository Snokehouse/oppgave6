import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  max-width: 900px;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  text-align: left;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Knapp = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
