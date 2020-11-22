import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNote } from "../../redux/actions";
import { NotesState } from "../../types/NoteTypes";
import { Textarea } from "../../ui/atoms";

export function NoteTextarea() {
  const selectedNote = useSelector((state: NotesState) => state.selectedNote);
  const dispatch = useDispatch();

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setSelectedNote({ ...selectedNote, text: evt.target.value }));

  return <Textarea value={selectedNote.text} onChange={handleTextChange} />;
}
