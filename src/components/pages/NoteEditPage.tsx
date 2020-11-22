import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VscTrash, VscChevronLeft } from "react-icons/vsc";
import { ActionIcon, Button, InputTitle, NoteTextarea } from "../atoms/";
import { ActionPanel } from "../molecules";
import { MainTemplate } from "../templates";
import { NotesState } from "../../types/NoteTypes";
import { deleteNote, saveNote, toggleShowEdit } from "../../redux/actions";

export function NoteEditPage() {
  const selectedNote = useSelector((state: NotesState) => state.selectedNote);
  const dispatch = useDispatch();

  const handleClickBack = () => dispatch(toggleShowEdit());

  const handleClickDelete = () => {
    dispatch(deleteNote(selectedNote.id));
    dispatch(toggleShowEdit());
  };

  const handleClickDone = () => {
    dispatch(saveNote(selectedNote));
    dispatch(toggleShowEdit());
  };

  return (
    <MainTemplate>
      <ActionPanel>
        <ActionIcon icon={<VscChevronLeft />} click={handleClickBack} />
        <ActionIcon icon={<VscTrash />} click={handleClickDelete} />
        <Button text='Done' click={handleClickDone} />
      </ActionPanel>
      <InputTitle />
      <NoteTextarea />
    </MainTemplate>
  );
}
