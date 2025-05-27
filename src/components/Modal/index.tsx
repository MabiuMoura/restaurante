import { useEffect } from 'react';
import * as S from './styles';

interface ModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ title, onClose, isOpen, children }:ModalProps)   => {

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

      return (
        <S.Overlay onClick={handleOverlayClick} >
            <S.ModalContainer>
                <S.ModalHeader>
                    <S.ModalTitle>{title}</S.ModalTitle>
                    <S.CloseIcon onClick={onClose} />
                </S.ModalHeader>
                <S.ModalContent>{children}</S.ModalContent>
            </S.ModalContainer>
        </S.Overlay>
  );
}

export default Modal;