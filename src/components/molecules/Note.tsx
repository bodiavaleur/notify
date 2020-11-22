import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedNote, toggleShowEdit } from "../../redux/actions";
import { NoteType } from "../../types/NoteTypes";
import { Text, Time, Title } from "../../ui/atoms";
import {
  PreviewBlock,
  PreviewBlockText,
  PreviewBlockTime,
  PreviewBlockTitle,
} from "../../ui/molecules";

export function Note(note: NoteType) {
  const dispatch = useDispatch();
  // Format note id to human-readable string (ex. 18/11/2020)
  const formatTime = new Date(note.id).toLocaleString().split(",")[0];

  const handleNoteClick = () => {
    dispatch(setSelectedNote(note));
    dispatch(toggleShowEdit());
  };

  return (
    <PreviewBlock onClick={handleNoteClick}>
      <PreviewBlockTitle>
        <Title>{note.title}</Title>
      </PreviewBlockTitle>
      <PreviewBlockTime>
        <Time>{formatTime}</Time>
      </PreviewBlockTime>
      <PreviewBlockText>
        <Text>{note.text}</Text>
      </PreviewBlockText>
    </PreviewBlock>
  );
}
