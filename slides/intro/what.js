import React from 'react';
import { Slide, Appear, Heading, Text } from 'spectacle';

import { backgroundWithImage } from 'styles';

export default (
  <Slide key="intro2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} fill textColor="secondary" margin="0 0 100px">
      What is GraphQL ?
    </Heading>
    <Appear fid="1">
      <Text
        textColor="secondary"
        textSize={28}
        italic
        lineHeight={2}
        margin="100px 0 0"
      >
        "GraphQL is a query language for APIs and a runtime for fulfilling
        those queries with your existing data. GraphQL provides a complete and
        understandable description of the data in your API, gives clients the
        power to ask for exactly what they need and nothing more, makes it
        easier to evolve APIs over time, and enables powerful developer tools."
      </Text>
    </Appear>
  </Slide>
);
