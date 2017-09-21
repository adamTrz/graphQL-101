import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

export default (
  <CodeSlide
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics6"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/props-transformation.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Props transformation' },
      { loc: [1, 10] },
      { loc: [63, 74], note: 'Define your own name for data prop' },
      { loc: [20, 21] },
      { loc: [50, 51] },
      { loc: [54, 55] },
    ]}
  />
);
