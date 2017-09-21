import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

export default (
  <CodeSlide
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics3"
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
      { loc: [69, 71], note: 'Use it! 😎' },
    ]}
  />
);
