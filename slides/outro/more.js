import React from 'react';
import { Appear, Slide, Heading, Text } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  1. Flow - (for maniacs) - we can  type our queries and mutations as well as what they return.
  1.1. There's even a codemod that transforms scheme to flow types.
  2. GraphiQL (an in-browser IDE for exploring GraphQL) - cool in-browser tool to view our schema documentation. Plus, we can test requests.
  3. GraphQL Playground (web version or desktop app) - built on top of GraphiQL with new features - sharing, Code generation, e.g. for Apollo Client and more.
  4. We can even add tests to our projects.
`;

export default (
  <Slide
    key="outro1"
    transition={['fade']}
    style={backgroundWithImage}
    notes={notes}
  >
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Want more?
    </Heading>
    <Appear fid="1">
      <Text margin="40px 0 0" textSize={40} textColor="secondary">
        Flow (and &apos;apollo-codegen&apos;)
      </Text>
    </Appear>
    <Appear fid="2">
      <Text margin="40px 0 0" textSize={40} textColor="secondary">
        GraphiQL
      </Text>
    </Appear>
    <Appear fid="3">
      <Text margin="40px 0 0" textSize={40} textColor="secondary">
        GraphQL Playground
      </Text>
    </Appear>
    <Appear fid="1">
      <Text margin="40px 0 0" textSize={40} textColor="secondary">
        Testing
      </Text>
    </Appear>
  </Slide>
);
