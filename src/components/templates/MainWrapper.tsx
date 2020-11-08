import React from "react";
import styled from "styled-components";

const MainWrapperUI = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 4.75rem 0.5rem 0 0.5rem;

  @media screen and (min-width: 1025px) {
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
`;

export const MainWrapper: React.FC = function ({ children }) {
  return <MainWrapperUI>{children}</MainWrapperUI>;
};
