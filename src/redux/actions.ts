import { NoteId, NoteText, NoteTitle, NoteType } from "../types/NoteTypes";
import {
  ADD_NOTE,
  DELETE_NOTE,
  NotesActionTypes,
  SAVE_NOTE,
  SET_NOTES,
  SET_SEARCH_QUERY,
  SET_SELECTED_NOTE,
  TOGGLE_SHOW_EDIT,
} from "./actionTypes";

export function setSearchQuery(query: string): NotesActionTypes {
  return {
    type: SET_SEARCH_QUERY,
    query,
  };
}

export function setSelectedNote(note: NoteType): NotesActionTypes {
  return {
    type: SET_SELECTED_NOTE,
    note,
  };
}

export function setNotes(notes: NoteType[]): NotesActionTypes {
  return {
    type: SET_NOTES,
    notes,
  };
}

export function addNote(): NotesActionTypes {
  return {
    type: ADD_NOTE,
    note: { title: "", text: "", id: +new Date() },
  };
}

export function deleteNote(id: NoteId): NotesActionTypes {
  return {
    type: DELETE_NOTE,
    id,
  };
}

export function saveNote(note: NoteType): NotesActionTypes {
  return {
    type: SAVE_NOTE,
    note,
  };
}

export function toggleShowEdit(): NotesActionTypes {
  return {
    type: TOGGLE_SHOW_EDIT,
  };
}
