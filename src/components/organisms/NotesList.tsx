import React from "react";
import { NotesCollection } from "../../types/NoteTypes";
import { List } from "../../ui/organisms";
import { Note } from "../molecules";

export function NotesList({ notes }: NotesCollection) {
  return (
    <List>
      {notes.map((note) => (
        <Note {...note} />
      ))}
    </List>
  );
}
