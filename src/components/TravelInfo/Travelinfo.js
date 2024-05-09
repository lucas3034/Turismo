import React from 'react';
import { TravelInfoContainer, TravelText, DestinationList } from './TravelInfo.styled';

const TravelInfo = () => {
  return (
    <TravelInfoContainer>
      <TravelText>
        <h2>Razões para Viajar</h2>
        <p>
          Viajar é uma experiência enriquecedora que traz inúmeros benefícios para a mente, corpo e alma. Explorar novos
          lugares, culturas e paisagens nos ajuda a expandir nossos horizontes, criar memórias inesquecíveis e cultivar
          uma apreciação maior pelo mundo ao nosso redor.
        </p>
        <p>
          Além disso, viajar é uma excelente forma de aliviar o estresse, recarregar as energias e renovar a perspectiva
          sobre a vida. Aproveite esta oportunidade para se conectar com a natureza, conhecer novas pessoas e
          experimentar diferentes estilos de vida.
        </p>
      </TravelText>
      <DestinationList>
        <h3>Destinos mais Populares</h3>
        <ul>
          <li>Paris, França</li>
          <li>Roma, Itália</li>
          <li>Tóquio, Japão</li>
          <li>Nova York, EUA</li>
          <li>Sydney, Austrália</li>
        </ul>
      </DestinationList>
    </TravelInfoContainer>
  );
};

export default TravelInfo;