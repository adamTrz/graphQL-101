import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  1. Basic app -  pictures gallery.
  2. Stack: React and ApolloGraphQL at frontend, GraphCool at backend.
`;
// TODO: Add gif of working app?
export default (
  <Slide
    notes={notes}
    key="basics1"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} fill textColor="secondary" margin="0 0 100px">
      How to use it then?
    </Heading>
  </Slide>
);
