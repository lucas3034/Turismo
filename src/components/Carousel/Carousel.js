import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { CarouselContainer, CarouselItem, CarouselImage, CarouselText, ProgressBar, ProgressBarFill, NavButton } from './Carousel.styled';

import recife from './recife.jpg';
import rio from './rio.jpg';
import salvador from './salvador.jpg';
import novayork from './novayork.jpg';
import toronto from './toronto.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const sliderRef = useRef(null);
  const autoplayIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    progressIntervalRef.current = setInterval(() => {
      setProgressWidth((prevWidth) => prevWidth + (100 / (5000 / 100)));
    }, 100);

    return () => {
      clearInterval(autoplayIntervalRef.current);
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  const settings = {
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setProgressWidth(0); // Reiniciar a barra de progresso
    },
    initialSlide: 0,
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

  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
    clearInterval(autoplayIntervalRef.current);
    clearInterval(progressIntervalRef.current);
    setProgressWidth(0);
    autoplayIntervalRef.current = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    progressIntervalRef.current = setInterval(() => {
      setProgressWidth((prevWidth) => prevWidth + (100 / (5000 / 100)));
    }, 100);
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
    clearInterval(autoplayIntervalRef.current);
    clearInterval(progressIntervalRef.current);
    setProgressWidth(0);
    autoplayIntervalRef.current = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    progressIntervalRef.current = setInterval(() => {
      setProgressWidth((prevWidth) => prevWidth + (100 / (5000 / 100)));
    }, 100);
  };

  return (
    <CarouselContainer>
      <Slider ref={sliderRef} {...settings}>
        {destinations.map((destination, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={destination.image} alt={`Destino ${index + 1}`} />
            <CarouselText>{destination.text}</CarouselText>
            <NavButton onClick={goToPreviousSlide}>&#8249;</NavButton>
            <NavButton onClick={goToNextSlide}>&#8250;</NavButton>
          </CarouselItem>
        ))}
      </Slider>
      <ProgressBar>
        <ProgressBarFill style={{ width: `${progressWidth}%` }} />
      </ProgressBar>
    </CarouselContainer>
  );
};

export default Carousel;