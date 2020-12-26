import React from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../types/NoteTypes";
import { List } from "../../ui/organisms";
import { Note } from "../molecules";

export function NotesList() {
  const { notes, searchQuery } = useSelector((state: NotesState) => ({
    notes: state.notes,
    searchQuery: state.searchQuery,
  }));

  const showNotes = () => {
    let allNotes = [...notes];

    if (searchQuery) {
      allNotes = allNotes.filter((note) => note.title.includes(searchQuery));
    }

    return allNotes.map((note) => <Note {...note} />);
  };

  return <List>{showNotes()}</List>;
}
