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
    code={require('raw-loader!assets/code/setup.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Setting up ApolloClient' },
      {
        loc: [7, 11],
        note: 'Imports',
      },
      { loc: [17, 20], note: 'Store constructor' },
      { loc: [14, 17], note: 'Some options' },
      { loc: [21, 22], note: 'Inject client at root level of your App' },
      { loc: [14, 22], title: 'Done!' },
    ]}
  />
);
