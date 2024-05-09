// src/components/Carousel/Carousel.styled.js
import styled from 'styled-components';
import { colors } from '../../styles';

export const CarouselContainer = styled.div`
  margin: 2rem 0;
`;

export const CarouselItem = styled.div`
  position: relative;
  height: 400px;
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