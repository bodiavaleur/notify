import { NoteId, NoteText, NoteTitle, NoteType } from "../types/NoteTypes";
import {
  ADD_NOTE,
  DELETE_NOTE,
  NotesActionTypes,
  SET_NOTES,
  SET_NOTE_TEXT,
  SET_SEARCH_QUERY,
  SET_SELECTED_NOTE,
  SET_TITLE,
} from "./actionTypes";

export function setTitle(title: NoteTitle): NotesActionTypes {
  return {
    type: SET_TITLE,
    title,
  };
}

export function setNoteText(text: NoteText): NotesActionTypes {
  return {
    type: SET_NOTE_TEXT,
    text,
  };
}

export function setSearchQuery(query: string): NotesActionTypes {
  return {
    type: SET_SEARCH_QUERY,
    query,
  };
}

export function setSelectedNote(noteIdx: number): NotesActionTypes {
  return {
    type: SET_SELECTED_NOTE,
    noteIdx,
  };
}

export function setNotes(notes: NoteType[]): NotesActionTypes {
  return {
    type: SET_NOTES,
    notes,
  };
}

export function addNote(note: NoteType): NotesActionTypes {
  return {
    type: ADD_NOTE,
    note,
  };
}

export function deleteNote(id: NoteId): NotesActionTypes {
  return {
    type: DELETE_NOTE,
    id,
  };
}
