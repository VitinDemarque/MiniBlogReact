import React from 'react';
import styled from 'styled-components';

// Estilização do Header
const HeaderContainer = styled.header`
  background: #343a40;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 8px 8px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

// Componente Header
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Miniblog</Logo>
    </HeaderContainer>
  );
};

export default Header;
