import { NoteId, NotesState, NoteType } from "../types/NoteTypes";
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

const initialState: NotesState = {
  searchQuery: "",
  notes: [
    {
      title: "Groceries",
      text: "blah blah blah blah",
      id: +new Date(),
    },
  ],
  selectedNoteIdx: 0,
};

export const mainReducer = (state = initialState, action: NotesActionTypes) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        notes: [
          ...state.notes,
          { ...state.notes[state.selectedNoteIdx], title: action.title },
        ],
      };

    case SET_NOTE_TEXT:
      return {
        ...state,
        notes: [
          ...state.notes,
          { ...state.notes[state.selectedNoteIdx], text: action.text },
        ],
      };

    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.query };

    case SET_NOTES:
      return { ...state, notes: action.notes };

    case SET_SELECTED_NOTE:
      return { ...state, selectedNote: action.noteIdx };

    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.note] };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      };

    default:
      return state;
  }
};
