
import React from "react";
import styled from "styled-components";
import arrayImg from '../../images/dress.jpeg'; 


const Card = styled.div`
  margin-block: 150px;
  width: auto;
  border-radius: 0px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
  padding: 24px;
  height: 100%;
`;

const ImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const StaticImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RedirectButton = styled.a`
  display: inline-block;
  padding: 12px 20px;
  background-color: #C37022;
  color: white;
  font-weight: 400;
  border-radius: 0px 8px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b86517;
  }
`;

const GiftCardDress = () => {
  return (
    <Card>
      <Overlay>
        <ImageWrapper>
          <StaticImage src={arrayImg} alt="Presente" />
        </ImageWrapper>
        <RedirectButton
          href="https://pin.it/lbEWcuUy8"
          target="_blank"
          rel="noopener noreferrer"
        >
          PALETA DE CORES
        </RedirectButton>
      </Overlay>
    </Card>
  );
};

export default GiftCardDress;
