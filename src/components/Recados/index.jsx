import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";


const FormWrapper = styled.div`
  max-width: 500px;
  margin: 100px auto;
  padding: 30px;
  border-radius: 8px;
  background-color: #272727;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ececec;
`;

const Label = styled.p`
  margin: 10px 0 5px;
  font-weight: bold;
   color: #ececec
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  resize: vertical;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #c37022;
  color: white;
  border: none;
  border-radius: 0 8px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b86517;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  color: ${(props) => (props.success ? "white" : "red")};
`;

const RecadoForm = () => {
  const form = useRef();
  const [statusMsg, setStatusMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_lb9bnur", 
        "template_oot4ow9", 
        form.current, "nOyFQgxTS8hXSKomi"
      )
      .then(() => {
        setStatusMsg("Recado enviado com sucesso!");
        form.current.reset();
      })
      .catch(() => {
        setStatusMsg("Ocorreu um erro ao enviar seu recado.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <FormWrapper>
      <Title>Deixe seu recado</Title>
      <form ref={form} onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input type="text" name="nome" required />

        <Label>Recado:</Label>
        <Textarea name="mensagem" required />

        <Button type="submit" disabled={isSending}>
          {isSending ? "ENVIANDO..." : "ENVIAR RECADO"}
        </Button>
      </form>
      {statusMsg && <Message success={statusMsg.includes("sucesso")}>{statusMsg}</Message>}
    </FormWrapper>
  );
};

export default RecadoForm;
