// ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from "./style";

export default function ContactForm() {
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
        },
        () => {
          alert("Erro ao enviar. Tente novamente.");
        }
      );
  };

  return (
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
  );
}
