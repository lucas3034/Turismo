import styled from 'styled-components';
import { colors } from '../../styles';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const NavLinks = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;