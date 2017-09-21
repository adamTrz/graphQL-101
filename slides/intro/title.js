import React from 'react';
import { Appear, Slide, Heading, Text } from 'spectacle';

import { backgroundWithImage } from 'styles';

export default (
  <Slide key="intro1" transition={['fade']} style={backgroundWithImage}>
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      GraphQL 101
    </Heading>
    <Appear fid="1">
      <Text margin="120px 0 0" textSize={30} textColor="secondary">
        Adam Trzciński
      </Text>
    </Appear>
  </Slide>
);
