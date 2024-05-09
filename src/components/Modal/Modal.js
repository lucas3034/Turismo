// src/components/Modal/Modal.js
import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from './Modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;