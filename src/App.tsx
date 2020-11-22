import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./globalStyle";
import { NoteEditPage, NotesPage } from "./components/pages";
import { NotesState } from "./types/NoteTypes";

export function App() {
  const showNoteEdit = useSelector((state: NotesState) => state.showNoteEdit);
  return (
    <>
      <GlobalStyle />
      {showNoteEdit ? <NoteEditPage /> : <NotesPage />}
    </>
  );
}
