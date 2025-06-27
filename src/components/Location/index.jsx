
import React from "react";
import styled from "styled-components";
import arrayImg from '../../images/requinte.png'; 


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

const GiftCardLocation = () => {
  return (
    <Card>
      <Overlay>
        <ImageWrapper>
          <StaticImage src={arrayImg} alt="Presente" />
        </ImageWrapper>
        <RedirectButton
          href="https://www.google.com/maps/dir/-23.5256303,-46.4768927/Espa%C3%A7o+Requinte+Campestre+-+Espa%C3%A7o+para+Eventos+-+Estr.+Jos%C3%A9+Marion,+680+-+Finco,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09831-510/@-23.6637137,-46.7162449,11z/data=!3m1!4b1!4m18!1m7!3m6!1s0x94ce3f990295a263:0x72c36b1db6b38042!2sEspa%C3%A7o+Requinte+Campestre+-+Espa%C3%A7o+para+Eventos!8m2!3d-23.8001365!4d-46.5479278!16s%2Fg%2F11bwf6_9cy!4m9!1m1!4e1!1m5!1m1!1s0x94ce3f990295a263:0x72c36b1db6b38042!2m2!1d-46.5479278!2d-23.8001365!3e3?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMO CHEGAR?
        </RedirectButton>
      </Overlay>
    </Card>
  );
};

export default GiftCardLocation;
