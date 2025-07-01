import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import arrayImg from '../../images/message.jpeg';

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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  padding: 1rem;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  padding: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: #C37022;
  }
`;


const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  color: #C37022;
`;

const Label = styled.label`
  font-weight: 500;
  margin-top: 16px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 4px;
  min-height: 100px;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: #C37022;
  color: white;
  border: none;
  border-radius: 0 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b86517;
  }
`;

const Message = styled.p`
  margin-top: 16px;
  text-align: center;
  color: ${({ success }) => (success ? "green" : "red")};
  font-weight: 500;
`;



const RecadoForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
      <Card>
        <Overlay>
          <ImageWrapper>
            <StaticImage src={arrayImg} alt="Presente" />
          </ImageWrapper>
          <RedirectButton onClick={() => setIsModalOpen(true)}>
            DEIXAR RECADO
          </RedirectButton>
        </Overlay>
      </Card>

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>x</CloseButton>
            <FormWrapper>
              <form style={{ display: "contents" }} ref={form} onSubmit={handleSubmit}>
                <Label>Nome:</Label>
                <Input type="text" name="nome" required />

                <Label>Recado:</Label>
                <Textarea name="mensagem" required />

                <Button type="submit" disabled={isSending}>
                  {isSending ? "ENVIANDO..." : "ENVIAR RECADO"}
                </Button>
              </form>
              {statusMsg && (
                <Message success={statusMsg.includes("sucesso")}>
                  {statusMsg}
                </Message>
              )}
            </FormWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default RecadoForm;
