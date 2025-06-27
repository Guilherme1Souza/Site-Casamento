// GiftCard.jsx
import React from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import arrayImg from '../../images/dance.jpg';
import arrayImg2 from '../../images/eyes-two.jpg';
import arrayImg3 from '../../images/eyes.jpg';


// Estilos
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

const SliderWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const SlideImage = styled.img`
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
  border-radius: 2px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b86517;
  }
`;

// Componente principal
const GiftCard = () => {

    function AutoplayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000); // tempo entre slides
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}


   const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [AutoplayPlugin] // <-- adicionando o plugin
  );


    const imagens = [arrayImg, arrayImg2, arrayImg3];

  return (
    <Card>
      <Overlay>
        <SliderWrapper ref={sliderRef} className="keen-slider">
          {imagens.map((src, index) => (
            <div className="keen-slider__slide" key={index}>
              <SlideImage src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </SliderWrapper>
        <RedirectButton href="https://docs.google.com/spreadsheets/d/1rARLGXMmFzgvxaQDFmIHFRLWf_EFypXepeLX6Fr0hSk/edit?usp=sharing">LISTA DE PRESENTES</RedirectButton>
      </Overlay>
    </Card>
  );
};

export default GiftCard;
