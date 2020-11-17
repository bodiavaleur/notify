import React from "react";
import { Text, Time, Title } from "../../ui/atoms";
import {
  PreviewBlock,
  PreviewBlockText,
  PreviewBlockTime,
  PreviewBlockTitle,
} from "../../ui/molecules";

export function Note() {
  return (
    <PreviewBlock>
      <PreviewBlockTitle>
        <Title>Grocery list</Title>
      </PreviewBlockTitle>
      <PreviewBlockTime>
        <Time>12:23</Time>
      </PreviewBlockTime>
      <PreviewBlockText>
        <Text>blah blah blah blah</Text>
      </PreviewBlockText>
    </PreviewBlock>
  );
}
