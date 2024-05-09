// src/components/Carousel/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, CarouselItem, CarouselImage, CarouselText } from './Carousel.styled';

import recife from './recife.jpg';
import rio from './rio.jpg';
import salvador from './salvador.jpg';
import novayork from './novayork.jpg';
import toronto from './toronto.jpg';

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const destinations = [
    {
      image: recife,
      text: 'Recife é uma vibrante cidade no Nordeste do Brasil, conhecida por suas praias deslumbrantes, rica cultura e culinária única.',
    },
    {
      image: rio,
      text: 'O Rio de Janeiro é famoso por suas paisagens espetaculares, como o Cristo Redentor e o Pão de Açúcar, além de suas praias vibrantes e vida noturna animada.',
    },
    {
      image: salvador,
      text: 'Salvador, a capital da Bahia, é uma cidade repleta de história, arquitetura colonial e influências africanas, oferecendo uma experiência cultural única.',
    },
    {
      image: novayork,
      text: 'Nova York é uma cidade cosmopolita e vibrante, famosa por seus arranha-céus, museus de classe mundial, vida noturna eletrizante e diversidade cultural.',
    },
    {
      image: toronto,
      text: 'Toronto, no Canadá, é uma cidade moderna e multicultural, com atrações como a CN Tower, a Harbourfront e bairros vibrantes cheios de vida.',
    },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={destination.image} alt={`Destino ${index + 1}`} />
            <CarouselText>{destination.text}</CarouselText>
          </CarouselItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;