import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
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

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>{children}</Overlay>,
    modalRoot
  );
};
