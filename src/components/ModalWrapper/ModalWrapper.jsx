import { CarModal } from 'components/CarModal/CarModal';
import { Modal } from 'components/Modal/Modal';
import React from 'react';

export const ModalWrapper = ({ car, toggleModal }) => {
  return (
    <Modal toggleModal={toggleModal}>
      <CarModal car={car} toggleModal={toggleModal} />
    </Modal>
  );
};
