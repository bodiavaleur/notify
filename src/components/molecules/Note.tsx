import React from "react";
import { NoteType } from "../../types/NoteTypes";
import { Text, Time, Title } from "../../ui/atoms";
import {
  PreviewBlock,
  PreviewBlockText,
  PreviewBlockTime,
  PreviewBlockTitle,
} from "../../ui/molecules";

export function Note({ title, text, id }: NoteType) {
  // Format note id to human-readable string (ex. 18/11/2020)
  const formatTime = new Date(id).toLocaleString().split(",")[0];
  return (
    <PreviewBlock>
      <PreviewBlockTitle>
        <Title>{title}</Title>
      </PreviewBlockTitle>
      <PreviewBlockTime>
        <Time>{formatTime}</Time>
      </PreviewBlockTime>
      <PreviewBlockText>
        <Text>{text}</Text>
      </PreviewBlockText>
    </PreviewBlock>
  );
}
