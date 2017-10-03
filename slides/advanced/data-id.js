import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Normalization with dataIdFromObject - easiest way to automatically update store with fresh data.
  2. Scenario - we can specify a custom function to generate IDs from each object, and supply it as the dataIdFromObject in the ApolloClient constructor. Apollo then will identify and de-duplicate the objects returned from the server.
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="advanced2"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/data-id-from-object.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'dataIdFromObject' },
      { loc: [0, 4], note: 'ApolloClient constructor' },
    ]}
  />
);
