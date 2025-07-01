import styled from 'styled-components';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "red" : "#666")};
  }
`;

export const Error = styled.p`
  color: red;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`;

export const InputContainer = styled.div`

`

export const RemoveIcon = styled(IoIosRemoveCircleOutline)`

`

export const AddIcon = styled(IoIosAddCircleOutline)`

`