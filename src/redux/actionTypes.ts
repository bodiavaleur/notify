import { NoteId, NoteType } from "../types/NoteTypes";

export const SET_NOTES = "SET_NOTES";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SELECTED_NOTE = "SET_SELECTED_NOTE";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const SAVE_NOTE = "SAVE_NOTE";

export const TOGGLE_SHOW_EDIT = "TOGGLE_SHOW_EDIT";

interface SetSearchQueryAction {
  type: typeof SET_SEARCH_QUERY;
  query: string;
}

interface SetSelectedNoteAction {
  type: typeof SET_SELECTED_NOTE;
  note: NoteType;
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

interface SaveNoteAction {
  type: typeof SAVE_NOTE;
  note: NoteType;
}

interface ShowNoteEditAction {
  type: typeof TOGGLE_SHOW_EDIT;
}

export type NotesActionTypes =
  | SetSearchQueryAction
  | SetSelectedNoteAction
  | SetNotesAction
  | AddNoteAction
  | DeleteNoteAction
  | SaveNoteAction
  | ShowNoteEditAction;
