import styled from "styled-components";

export const PreviewBlock = styled.li`
  display: grid;
  width: 100%;
  height: 3.75rem;
  max-width: 768px;
  grid-template-columns: 5rem auto;
  grid-template-rows: 1.5rem auto;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.4rem;
  text-decoration: none;
  user-select: none;
  border-radius: 0.5rem;
  background: var(--gray);
`;

export const PreviewBlockTitle = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
`;

export const PreviewBlockTime = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;

export const PreviewBlockText = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;
