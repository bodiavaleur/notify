import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  max-width: 30rem;
  min-height: 2rem;
  margin: 1rem 0;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-align: center;
  background: var(--gray);
  color: var(--text-black);

  &::placeholder {
    color: var(--text-gray);
  }
`;
