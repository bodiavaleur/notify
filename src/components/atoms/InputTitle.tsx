import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNote } from "../../redux/actions";
import { NotesState } from "../../types/NoteTypes";
import { TitleInput } from "../../ui/atoms/";

export function InputTitle() {
  const selectedNote = useSelector((state: NotesState) => state.selectedNote);
  const dispatch = useDispatch();

  const handleTitleInput = (evt: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSelectedNote({ ...selectedNote, title: evt.target.value }));

  return (
    <TitleInput
      placeholder='Type your title'
      value={selectedNote.title}
      onChange={handleTitleInput}
    />
  );
}
