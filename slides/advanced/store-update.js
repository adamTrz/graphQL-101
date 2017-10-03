import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Most fine grained way to update cache.
  2. We can access and reshape all data in our store automatically.
`;

export default (
  <CodeSlide
    notes={notes}
    style={backgroundWithImage}
    bgColor="#171E26"
    key="advanced4"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/store-update.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0], title: 'Store update' },
      { loc: [67, 72], note: 'Delete mutation' },
      { loc: [72, 83], note: 'Store update definition' },
      { loc: [72, 73], note: 'Updater function' },
      { loc: [73, 76], note: 'Read the data from our cache for this query' },
      { loc: [76, 77], note: 'Filter out deleted post' },
      { loc: [77, 83], note: 'Write our data back to the cache' },
    ]}
  />
);
