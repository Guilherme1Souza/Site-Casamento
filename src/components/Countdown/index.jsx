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
    ModalOverlay, ModalContent
} from "./style";



const Countdown = () => {
    const targetDate = new Date("2025-10-19T00:00:00");
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
    const [modalAberto, setModalAberto] = useState(false);

    const fecharModal = () => {
        setModalAberto(false);
    };

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
            .then(
                () => {
                    alert("Mensagem enviada com sucesso!");
                    form.current.reset();
                    onClose(); // fecha modal após enviar
                },
                () => {
                    alert("Erro ao enviar. Tente novamente.");
                }
            );
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
        <CountdownWrapper>
            <CountdownTitle>Contagem Regressiva</CountdownTitle>
            <TimeBox>
                <div>
                    <TimeUnit>
                        <span>{timeLeft.days}</span>
                    </TimeUnit>
                    <Label>Dias</Label>
                </div>
                <div>
                    <TimeUnit>
                        <span>{timeLeft.hours}</span>
                    </TimeUnit>
                    <Label>Horas</Label>
                </div>
                <div>
                    <TimeUnit>
                        <span>{timeLeft.minutes}</span>
                    </TimeUnit>
                    <Label>Minutos</Label>
                </div>
                <div>
                    <TimeUnit>
                        <span>{timeLeft.seconds}</span>
                    </TimeUnit>
                    <Label>Segundos</Label>
                </div>
            </TimeBox>
               <FormButton type="button" onClick={() => setModalAberto(true)}>
        Confirmar Presença
      </FormButton>

      {modalAberto && (
        <ModalOverlay>
          <ModalContent style={{ maxWidth: "400px", padding: "20px", position: "relative" }}>
            <button
              onClick={fecharModal}
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
              <h3>Confirmar Presença</h3>
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
        </CountdownWrapper>
    );
};

export default Countdown;
