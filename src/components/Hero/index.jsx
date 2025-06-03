import React from "react";
import styled from "styled-components";
import { media } from "../../styles/break";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const ResponsiveVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;

  @media ${media.xs} {
    height: 100vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* preto com 50% de transparência */
  pointer-events: none; /* permite clicar nos elementos abaixo se houver */
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
`;

export function Hero() {
  return (
    <VideoWrapper>
      <ResponsiveVideo autoPlay muted loop playsInline>
        <source src="/LetGui.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </ResponsiveVideo>
      <Overlay />
      <Content>
      </Content>
    </VideoWrapper>
  );
}
