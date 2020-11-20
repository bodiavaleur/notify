export type NoteTitle = string;
export type NoteText = string;
export type NoteId = number;

export interface NoteType {
  title: NoteTitle;
  text: NoteText;
  id: NoteId;
}

export interface NotesCollection {
  notes: NoteType[];
}

export interface NotesState {
  searchQuery: string;
  notes: NoteType[];
  selectedNoteIdx: number;
}
