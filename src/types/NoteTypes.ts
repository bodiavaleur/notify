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
