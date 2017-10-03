import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { backgroundWithImage } from 'styles';

const notes = `
  1. Displaying large lists of data? Pagination to the rescue!
  2. Two most common solutions - 'Offset based' and 'Cursor based'
  3. Depending on how our database accepts query parameters we need to send those as query variables.
  4. Then, in our 'loadMore' handler, we need to define 'fetchMore' with two options: 
  'varibales' (what will be sent to the server) and 'updateQuery' (what we want to do we recieved data).
`;

export default (
  <CodeSlide
    notes={notes}
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
