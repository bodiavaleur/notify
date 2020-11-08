import React from "react";
import styled from "styled-components";

const HeaderUI = styled.header`
  display: flex;
  width: 100%;
  height: 4rem;
  max-width: 1024px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(20px) saturate(2);
  background: white;

  @media screen and (min-width: 1025px) {
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
`;

export const Header: React.FC = function () {
  return <HeaderUI>Notify</HeaderUI>;
};
