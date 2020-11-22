import styled, { css } from "styled-components";

const buttonDefaults = css`
  height: 2rem;
  margin: 0 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  text-align: center;
  background: none;
`;

export const ButtonIcon = styled.button`
  ${buttonDefaults}
  width: 2rem;
  font-size: 2rem;

  svg {
    fill: var(--primary);
  }
`;

export const ButtonText = styled.button`
  ${buttonDefaults}
  font-size: 1.25rem;
  color: var(--primary);
`;
