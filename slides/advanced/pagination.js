import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

export default (
  <CodeSlide
    style={backgroundWithImage}
    bgColor="#171E26"
    key="advanced1"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/pagination.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Pagination' },
      { loc: [11, 20], note: 'Data shape' },
      { loc: [73, 81], note: 'Everyday props transformations' },
      { loc: [81, 82], note: "Defining 'loadMore' handler" },
      { loc: [82, 83], note: 'Initial checkup if we need to fetch anything' },
      { loc: [83, 89], note: 'Define variables for query' },
      { loc: [89, 104], note: 'Update store' },
      { loc: [98, 99], note: "Don't forget about '__typename' !" },
    ]}
  />
);
