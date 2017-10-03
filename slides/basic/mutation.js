import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Mutations - getting needed data from the server.
  2. "Read, Update and Delete" from CRUD functions.  
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics4"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/mutation.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Mutation' },
      {
        loc: [2, 3],
        note: "Import helpers from 'react-apollo'.",
      },
      { loc: [6, 16], note: 'Define mutation.' },
      { loc: [74, 81], note: "Wrap your component with Apollo's HOC. " },
      { loc: [78, 79], note: 'ProTip! Define name of a mutation' },
      { loc: [69, 71], note: 'Use it!' },
    ]}
  />
);
