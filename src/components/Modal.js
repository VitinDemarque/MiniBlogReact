import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ children, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        role="dialog"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          &times;
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
