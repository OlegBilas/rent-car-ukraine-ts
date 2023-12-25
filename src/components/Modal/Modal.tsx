import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';
import { ToggleModal } from 'types/types.typed';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

interface IProps {
  toggleModal: ToggleModal;
  children: React.ReactNode;
}

export const Modal = ({ children, toggleModal }: IProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lock-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lock-scroll');
    };
  }, [toggleModal]);

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={() => handleOverlayClick}>{children}</Overlay>,
    modalRoot
  );
};
