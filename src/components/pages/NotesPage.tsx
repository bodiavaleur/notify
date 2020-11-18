import React from "react";
import { Search } from "../atoms";
import { NotesList } from "../organisms";
import { MainTemplate } from "../templates";

export function NotesPage() {
  return (
    <MainTemplate>
      <Search />
      <NotesList
        notes={[
          {
            title: "Groceries",
            text: "blah blah blah blah",
            id: +new Date(),
          },
        ]}
      />
    </MainTemplate>
  );
}
