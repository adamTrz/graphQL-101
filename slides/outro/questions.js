import React from 'react';
import { Appear, Slide, Heading, Text } from 'spectacle';

import { backgroundWithImage } from 'styles';

export default (
  <Slide key="outro2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Thank you!
    </Heading>
    <Appear fid="1">
      <Text margin="120px 0 0" textSize={50} textColor="secondary">
        Questions?
      </Text>
    </Appear>
  </Slide>
);
