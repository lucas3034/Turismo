import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './styles';
import Header from './components/Header/Header';
import TravelInfo from './components/TravelInfo/Travelinfo';
import ChatBot from './components/ChatBot/ChatBot';
import Carousel from './components/Carousel/Carousel';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, ${colors.white}, ${colors.gray});
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <TravelInfo />
        <Carousel />
        <ChatBot />
      </AppContainer>
    </>
  );
}

export default App;