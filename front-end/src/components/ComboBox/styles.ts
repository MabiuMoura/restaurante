import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  height: 70px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  &:focus {
    border-color: #555;
  }
`;

export const Option = styled.option`
  height: 70px;
  background-color:red; 
`