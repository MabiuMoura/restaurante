import styled from "styled-components";

export const StyledButton = styled.button`
  width:100%;
  height:100%;
  padding: 10px 20px;
  background-color: #24D276;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1DAF61;
  }

  &:active {
    background-color: #18884C;
    transform: scale(0.95);
  }
`;