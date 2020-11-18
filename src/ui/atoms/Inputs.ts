import styled, { css } from "styled-components";

const inputDefaults = css`
  width: 100%;
  height: 2rem;
  max-width: 30rem;
  min-height: 2rem;
  margin: 1rem 0;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--text-black);
`;

export const SearchInput = styled.input`
  ${inputDefaults}
  border-radius: 0.5rem;
  text-align: center;
  background: var(--gray);

  &::placeholder {
    color: var(--text-gray);
  }
`;

export const TitleInput = styled.input`
  ${inputDefaults}
`;
