import React from 'react';
import { Slide, Heading, S, Text, Appear } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  1. just a language - not a framework, lib  or anything
  2. strongly typed
  3. thats a "why?", we'll get to it ;)
`;

export default (
  <Slide
    notes={notes}
    key="intro3"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} fill textColor="secondary" margin="0 0 100px">
      Huh ?
    </Heading>
    <Appear fid="1">
      <Text
        fill
        textColor="secondary"
        textSize={22}
        lineHeight={1.5}
        margin="0 0 20px 0"
      >
        GraphQL is a <S type="underline">query language</S> for APIs and a
        runtime for fulfilling
        those queries with your existing data
      </Text>
    </Appear>
    <Appear fid="2">
      <Text
        fill
        textColor="secondary"
        textSize={22}
        lineHeight={1.5}
        margin="0 0 20px 0"
      >
        GraphQL provides a complete and understandable{' '}
        <S type="underline">description of the data</S> in your API,
      </Text>
    </Appear>
    <Appear fid="3">
      <Text
        fill
        textColor="secondary"
        textSize={22}
        lineHeight={1.5}
        margin="0 0 20px 0"
      >
        gives clients the power to{' '}
        <S type="underline">ask for exactly what they need</S> and nothing
        more, makes it easier to evolve APIs over time, and enables powerful
        developer tools.
      </Text>
    </Appear>
  </Slide>
);
