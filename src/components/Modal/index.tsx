import * as S from './styles';

interface ModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ title, onClose, isOpen, children }:ModalProps)   => {
    if (!isOpen) return null;

      return (
        <S.Overlay>
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