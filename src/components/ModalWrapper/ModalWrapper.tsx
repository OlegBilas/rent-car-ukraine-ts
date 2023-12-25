import { CarModal } from 'components/CarModal/CarModal';
import { Modal } from 'components/Modal/Modal';
import { Car, ToggleModal } from 'types/types';

interface IProps {
  car: Car;
  toggleModal: ToggleModal;
}

export const ModalWrapper = ({ car, toggleModal }: IProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <CarModal car={car} toggleModal={toggleModal} />
    </Modal>
  );
};
