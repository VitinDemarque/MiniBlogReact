import React from 'react';
import styled from 'styled-components';

// Estilização do Banner
const BannerContainer = styled.div`
  background: #007bff;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 0 0 8px 8px;
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
`;

// Componente Banner
const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>Miniblog</BannerTitle>
      <BannerSubtitle>Compartilhe seus pensamentos com o mundo</BannerSubtitle>
    </BannerContainer>
  );
};

export default Banner;
