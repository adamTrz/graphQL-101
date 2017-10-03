import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Sometimes it's cumbersome to acces our data by always typing 'this.props.data.ourData'...
  2. What if there's a way to shorten this up a bit?
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="basics7"
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
