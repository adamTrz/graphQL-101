import React from 'react';
import { Slide, Heading, S, Text, Appear } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  1. Speeds up development experience and pleasure
  2. Also - mobile friendly (minimises traffic) 
  3. Applications can easily scale 
  4. More - database agnostic and effectively can be used in any context where an API is used. 
  5. Different frameworks, languages and platforms: frontend: Vue, Angular, Ember, Expo. Server: JS, Ruby, Java, Elixir, Python 
`;

export default (
  <Slide
    notes={notes}
    key="intro4"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} fill textColor="secondary" margin="0 0 100px">
      Why GraphQL ?
    </Heading>
    <Appear fid="1">
      <Text
        fill
        textColor="secondary"
        textSize={22}
        lineHeight={1.5}
        margin="0 0 20px 0"
      >
        Declarative data fetching - get only what you want
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
        No more overfetching or underfetching of data
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
        Strongly typed schemas allow developers to move faster
      </Text>
    </Appear>
  </Slide>
);
