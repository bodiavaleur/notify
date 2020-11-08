import React from "react";
import styled from "styled-components";
import { NoteBoxProps } from "../../types/NoteBoxProps";

const NoteBoxUI = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0 0 20px 2px var(--shadow);
`;

export const NoteBox: React.FC<NoteBoxProps> = ({ note, title }) => {
  return <NoteBoxUI></NoteBoxUI>;
};
