import React from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../types/NoteTypes";
import { List } from "../../ui/organisms";
import { Note } from "../molecules";

export function NotesList() {
  const notes = useSelector((state: NotesState) => state.notes);

  return (
    <List>
      {notes.map((note) => (
        <Note {...note} />
      ))}
    </List>
  );
}
