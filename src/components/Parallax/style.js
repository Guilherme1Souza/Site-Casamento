import styled, { keyframes, css } from "styled-components";


const slideInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(160px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const GalleryWrapper = styled.section`
  position: relative;
  top: 60px;
  width: 100%;
  background: black;
  padding: 60px 0;
  z-index: 1;
  overflow: hidden;
  opacity: 0;
    transform: translateY(-60px);
    transition: opacity 0.3s ease, transform 1.68s ease;
  
    ${({ isVisible, delay }) =>
      isVisible &&
      css`
        animation: ${slideInBottom} 1.68s ease-out forwards;
        animation-delay: ${delay};
      `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;  /* Centraliza as imagens */
  margin-bottom: 10px;
  will-change: transform;
`;

export const Image = styled.img`
  height: 300px;
  width: 400px;
  margin: 10px;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
    transform: rotate(8deg);

  @media (max-width: 1024px) {
    height: 250px;
    width: 330px;
  }

  @media (max-width: 768px) {
    height: 200px;
    width: 280px;
  }

  @media (max-width: 480px) {
    height: 180px;
    width: 240px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  pointer-events: none;
  color: white;
  text-shadow: 2px 2px 5px black;
  font-size: 14px;
  width: 350px;
  display: flex;
  flex-direction: column;

  justify-content: start;
  gap: 10px;
`;

export const OverlayText = styled.div`
  font-size: 3rem;
 

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const OverlaySubtext = styled.div`
  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

