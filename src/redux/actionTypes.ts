import { NoteId, NoteText, NoteTitle, NoteType } from "../types/NoteTypes";

export const SET_NOTES = "SET_NOTES";
export const SET_TITLE = "SET_TITLE";
export const SET_NOTE_TEXT = "SET_NOTE_TEXT";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SELECTED_NOTE = "SET_SELECTED_NOTE";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

interface SetTitleAction {
  type: typeof SET_TITLE;
  title: NoteTitle;
}

interface SetNoteTextAction {
  type: typeof SET_NOTE_TEXT;
  text: NoteText;
}

interface SetSearchQueryAction {
  type: typeof SET_SEARCH_QUERY;
  query: string;
}

interface SetSelectedNoteAction {
  type: typeof SET_SELECTED_NOTE;
  noteIdx: number;
}

interface SetNotesAction {
  type: typeof SET_NOTES;
  notes: NoteType[];
}

interface AddNoteAction {
  type: typeof ADD_NOTE;
  note: NoteType;
}

interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  id: NoteId;
}

export type NotesActionTypes =
  | SetTitleAction
  | SetNoteTextAction
  | SetSearchQueryAction
  | SetSelectedNoteAction
  | SetNotesAction
  | AddNoteAction
  | DeleteNoteAction;
