import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Another way, besides 'refetch' of controlling store shape.
  2. Optimistic UI is a pattern that you can use to simulate the results of a mutation and update the UI even before receiving a response from the server. Once the response is received from the server, optimistic result is thrown away and replaced with the actual result.
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="advanced3"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/optimistic-response.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Optimistic response' },
      { loc: [138, 143], note: 'Oridinary mutation' },
      { loc: [143, 151], note: 'Optimistic response definition' },
      { loc: [145, 146], note: 'Name of mutation triggering update' },
      { loc: [146, 148], note: 'Data for updated post' },
      { loc: [148, 149], note: 'ProTip - remember about `__typename`' },
    ]}
  />
);
