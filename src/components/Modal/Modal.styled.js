// src/components/Modal/Modal.styled.js
import styled from 'styled-components';
import { colors } from '../../styles';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 5px;
  max-width: 600px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: ${colors.darkGray};
  cursor: pointer;

  &:hover {
    color: ${colors.darkGreen};
  }
`;