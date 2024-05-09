import styled from 'styled-components';

export const TravelInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f8f9fa;
`;

export const TravelText = styled.div`
  flex: 1;
  margin-right: 2rem;

  h2 {
    color: #008000;
  }

  p {
    line-height: 1.5;
  }
`;

export const DestinationList = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    color: #008000;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;