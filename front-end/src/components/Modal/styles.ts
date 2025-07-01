import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div<{ width?: string,}>`
  background-color: white;
  border-radius: 12px;
  width: ${({ width }) => width || '500px'};
  max-width: 90%;
  padding: 20px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 23px;
  font-weight: 600;
  margin: 0;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 24px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #f44336;
  }
`;

export const ModalContent = styled.div`
  margin-top: 20px;
`;