import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';
import { Car, ToggleModal } from 'types/types';
import { CarDetails } from 'components/CarDetails/CarDetails';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

interface IProps {
  toggleModal: ToggleModal;
  car: Car;
}

export const Modal = ({ car, toggleModal }: IProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        toggleModal(car);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lock-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lock-scroll');
    };
  }, [toggleModal]);

  const handleOverlayClick = () => (e: MouseEvent) => {
    console.log(e);
    if (e.target === e.currentTarget) {
      toggleModal(car);
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <CarDetails car={car} toggleModal={toggleModal} />
    </Overlay>,
    modalRoot
  );
};
