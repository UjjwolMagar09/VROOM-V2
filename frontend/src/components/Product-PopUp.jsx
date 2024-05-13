import React, { useState } from 'react';
import Modal from 'react-modal';

// Define custom styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '300px', 
    padding: '20px',
  },
};

const Popup = ({ trigger, content, onYes, onNo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>{trigger}</div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <div>
          {content}
        </div>
        <div>
          <button style={{ marginRight: '10px' }} onClick={() => { onYes(); closeModal(); }}>Yes</button>
          <button onClick={() => { onNo(); closeModal(); }}>No</button>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
