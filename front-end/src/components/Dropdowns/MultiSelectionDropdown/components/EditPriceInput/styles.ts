import styled from "styled-components";

export const Input = styled.input<{ hasError?: boolean }>`
  width: max-content;
  padding: 2px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 10px;
  font-size: 13px;
  width: 60%;
  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "red" : "#666")};
  }
`;