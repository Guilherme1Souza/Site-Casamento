import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #000;

  h3 {
    color: #f1f1f1;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  background-color: #0d0d0d;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #ddd;
  font-size: 0.95rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid #333;
  background-color: #1a1a1a;
  border-radius: 6px;
  font-size: 1rem;
  color: #f1f1f1;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const FormButton = styled.button`
  padding: 0.9rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e07b20;
  }
`;
