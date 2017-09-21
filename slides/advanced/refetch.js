import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

export default (
  <CodeSlide
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
