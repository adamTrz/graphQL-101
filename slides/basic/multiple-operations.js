import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. We can have more than one graphql operation in our component.
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics5"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/multiple-operations.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Multiple operations' },
      {
        loc: [1, 2],
        note: "Import helpers from 'react-apollo'.",
      },
      { loc: [73, 81], note: 'Define mutations' },
      { loc: [81, 91], note: 'and queries.' },
      { loc: [91, 102], note: "Wrap your component with Apollo's HOCs. " },
      {
        loc: [91, 102],
        note: "Wrap your component with Apollo's HOCs. ",
        title: 'Ummm, a little mess...  ',
      },
      { loc: [103, 114], note: "ProTip! Use 'compose'!" },
      { loc: [103, 114], title: 'Better :)' },
    ]}
  />
);
