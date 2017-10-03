import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Simplest way to update data in our Store - after a mutation we order graphql to refetch some queries and return fresh data.
  2. Disatvantage - user needs to wait for and of mutation AND and of refetching to view new data.
  3. When to use - to udate data which is in 'background'.
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="advanced2"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/refetch.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Refetch' },
      { loc: [66, 71], note: 'Oridinary mutation' },
      { loc: [71, 72], note: 'Refetch in action' },
    ]}
  />
);
