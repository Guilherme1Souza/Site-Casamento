import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { X } from 'lucide-react';
import {
  CountdownWrapper,
  CountdownTitle,
  TimeBox,
  TimeUnit,
  Label,
  Container,
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
  ModalOverlay,
  ModalContent
} from "./style";

const Countdown = () => {
  const targetDate = new Date("2025-10-19T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  const [modalConfirmacaoAberta, setModalConfirmacaoAberta] = useState(false);
  const [modalObrigadoAberta, setModalObrigadoAberta] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);


  const form = useRef();

  const enviarFormulario = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lb9bnur",
        "template_cgz43p9",
        form.current,
        "nOyFQgxTS8hXSKomi"
      )
      .then(() => {
        form.current.reset();
        setModalConfirmacaoAberta(false); // fecha modal do formulário
        setModalObrigadoAberta(true);     // abre modal de "obrigado"
      })
      .catch(() => {
        alert("Erro ao enviar. Tente novamente.");
      });
  };

  function getTimeRemaining() {
    const now = new Date();
    const total = targetDate - now;

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownWrapper ref={ref} isVisible={isVisible}>
      <CountdownTitle>Contagem Regressiva</CountdownTitle>
      <TimeBox>
        <div>
          <TimeUnit><span>{timeLeft.days}</span></TimeUnit>
          <Label>Dias</Label>
        </div>
        <div>
          <TimeUnit><span>{timeLeft.hours}</span></TimeUnit>
          <Label>Horas</Label>
        </div>
        <div>
          <TimeUnit><span>{timeLeft.minutes}</span></TimeUnit>
          <Label>Minutos</Label>
        </div>
        <div>
          <TimeUnit><span>{timeLeft.seconds}</span></TimeUnit>
          <Label>Segundos</Label>
        </div>
      </TimeBox>

      <FormButton type="button" onClick={() => setModalConfirmacaoAberta(true)}>
        Confirmar Presença
      </FormButton>

      {/* Modal de confirmação */}
      {modalConfirmacaoAberta && (
        <ModalOverlay>
          <ModalContent style={{ maxWidth: "400px", padding: "20px", position: "relative" }}>
            <button
              onClick={() => setModalConfirmacaoAberta(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#ffffff",
              }}
              aria-label="Fechar modal"
            >
              <X />
            </button>
            <Container>
              <h4>Confirmar Presença</h4>
              <FormContainer ref={form} onSubmit={enviarFormulario}>
                <FormLabel>
                  Nome:
                  <FormInput type="text" name="nome" required />
                </FormLabel>
                <FormLabel>
                  Sobrenome:
                  <FormInput type="text" name="sobrenome" required />
                </FormLabel>
                <FormLabel>
                  Telefone:
                  <FormInput
                    type="tel"
                    name="telefone"
                    required
                    pattern="\d{10,15}"
                  />
                </FormLabel>
                <FormButton type="submit">Enviar</FormButton>
              </FormContainer>
            </Container>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal de agradecimento */}
      {modalObrigadoAberta && (
        <ModalOverlay>
          <ModalContent style={{ maxWidth: "400px", padding: "40px", textAlign: "center", position: "relative" }}>
            <button
              onClick={() => setModalObrigadoAberta(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#ffffff",
              }}
              aria-label="Fechar modal"
            >
              <X />
            </button>
            <h3>Obrigado por confirmar sua presença! 🎉</h3>
            <p>Deseja deixar um recado para os noivos?</p>
             <FormButton type="submit">Recado</FormButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </CountdownWrapper>
  );
};

export default Countdown;
