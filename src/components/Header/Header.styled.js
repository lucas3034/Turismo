// src/components/Header/Header.styled.js
import styled from 'styled-components';
import { colors } from '../../styles';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 1rem;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavLinks = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;