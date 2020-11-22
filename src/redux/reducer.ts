import { NotesState } from "../types/NoteTypes";
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

const initialState: NotesState = {
  searchQuery: "",
  notes: [],
  selectedNote: { title: "", text: "", id: 0 },
  showNoteEdit: false,
};

export const mainReducer = (state = initialState, action: NotesActionTypes) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.query };

    case SET_NOTES:
      return { ...state, notes: action.notes };

    case SET_SELECTED_NOTE:
      return { ...state, selectedNote: action.note };

    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.note] };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      };

    case SAVE_NOTE:
      const newNotes = state.notes.filter((n) => n.id !== action.note.id);
      return {
        ...state,
        notes: [...newNotes, action.note],
      };

    case TOGGLE_SHOW_EDIT:
      return { ...state, showNoteEdit: !state.showNoteEdit };

    default:
      return state;
  }
};
