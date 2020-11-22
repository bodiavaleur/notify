import React from "react";
import { useDispatch } from "react-redux";
import { ActionIcon, Search } from "../atoms";
import { ActionPanel } from "../molecules";
import { NotesList } from "../organisms";
import { MainTemplate } from "../templates";
import { VscAdd } from "react-icons/vsc";
import { addNote } from "../../redux/actions";

export function NotesPage() {
  const dispatch = useDispatch();

  const handleAddNote = () => dispatch(addNote());

  return (
    <MainTemplate>
      <ActionPanel>
        <Search />
        <ActionIcon icon={<VscAdd />} click={handleAddNote} />
      </ActionPanel>
      <NotesList />
    </MainTemplate>
  );
}
