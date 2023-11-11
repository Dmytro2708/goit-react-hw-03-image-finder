import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'orange',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <img src={image} alt="Зображення" />
      </div>
    </Modal>
  );
};
