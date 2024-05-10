import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';


export const CarouselContainer = styled.div`
  margin: 2rem 0;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CarouselText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${colors.white};
  padding: 1rem;
  text-align: center;
`;

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  height: 5px;
  background-color: ${colors.darkGray};
  margin-top: 10px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: ${colors.green};
  animation: ${progressAnimation} 5s linear infinite;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1;

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }

  @media (max-width: 768px) {
    &:first-child {
      left: 5px;
    }

    &:last-child {
      right: 5px;
    }
  }
`;

export const CarouselItem = styled.div`
  position: relative;
  height: 400px;

  ${NavButton} {
    &:first-child {
      left: 20px;
    }

    &:last-child {
      right: 20px;
    }
  }
`;