import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

export default (
  <CodeSlide
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics2"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/query.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Query' },
      {
        loc: [1, 2],
        note: "Import helpers from 'react-apollo'.",
      },
      { loc: [3, 10], note: 'Define your query.' },
      { loc: [65, 67], note: "Wrap your component with Apollo's HOC. " },
      { loc: [51, 58], note: 'Use it! 😎' },
    ]}
  />
);
