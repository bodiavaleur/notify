import React from "react";
import { useSelector } from "react-redux";
import { Search } from "../atoms";
import { ActionPanel } from "../molecules";
import { NotesList } from "../organisms";
import { MainTemplate } from "../templates";
import { NotesState } from "../../types/NoteTypes";

export function NotesPage() {
  const notes = useSelector((state: NotesState) => state.notes);

  return (
    <MainTemplate>
      <ActionPanel>
        <Search />
      </ActionPanel>
      <NotesList notes={notes} />
    </MainTemplate>
  );
}
