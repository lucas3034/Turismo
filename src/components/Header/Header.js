import React, { useState } from 'react';
import { HeaderContainer, Logo, NavLinks, NavLink, Title } from './Header.styled';
import logo from './logo.png';
import Modal from '../Modal/Modal';

const Header = () => {
  const [showModal, setShowModal] = useState(null);

  const openModal = (content) => {
    setShowModal(content);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  const modalContent = {
    Início: 'Bem-vindo à PontesTur, sua agência de viagens preferida!',
    Sobre: 'Somos uma equipe apaixonada por viajar e ajudar as pessoas a criar memórias inesquecíveis.',
    Destinos: 'Exploramos os melhores destinos ao redor do mundo, proporcionando experiências únicas.',
    Contato: 'Entre em contato conosco para mais informações e Reserve sua próxima aventura!',
  };

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="PontesTur" />
        <Title>PONTES TUR</Title>
        <NavLinks>
          {Object.keys(modalContent).map((link) => (
            <NavLink key={link} onClick={() => openModal(modalContent[link])}>
              {link}
            </NavLink>
          ))}
        </NavLinks>
      </HeaderContainer>
      <Modal isOpen={showModal !== null} onClose={closeModal}>
        {showModal}
      </Modal>
    </>
  );
};

export default Header;