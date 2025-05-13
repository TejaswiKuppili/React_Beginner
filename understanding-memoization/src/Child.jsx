import React from 'react';

// This component is memoized using React.memo to prevent unnecessary re-renders when the parent component re-renders.
// It will only re-render if the props passed to it change.
const Child = ({ header }) => {
  console.log('Child component rendered');

  return(
    <div className='child'>
        <h1>{header}</h1>
        <p>
            Knowing how to write a paragraph is incredibly important.
            It’s a basic aspect of writing, and it is something that everyone should know how to do.
            There is a specific structure that you have to follow when you’re writing a paragraph.
            This structure helps make it easier for the reader to understand what is going on. 
            Through writing good paragraphs, a person can communicate a lot better through their writing.
        </p>
    </div>
  );
};

export default React.memo(Child);