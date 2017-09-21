import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

export default (
  <CodeSlide
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics5"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/controlling-props.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Controlling props' },
      { loc: [1, 10] },
      { loc: [67, 68], note: 'Define your own name for data prop' },
      { loc: [20, 21] },
      { loc: [50, 51] },
      { loc: [65, 67], note: "Use components 'ownProps' inside query" },
      { loc: [71, 72], note: 'Skip operation' },
      { loc: [69, 70], note: 'Define pollInterval' },
    ]}
  />
);
