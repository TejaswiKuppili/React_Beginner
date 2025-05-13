import React from 'react';
import './App.css';

function App() {
  const topic = 'React';
  const age = 23;
  const likes = ['JavaScript', 'React', 'Node.js'];

  return(
    <div id ="someId">
      {/* This is JSX */}
      <h1 id ="header-id">{topic} is awesome!!!</h1>
      <h2>{age}</h2>
      <h2>{likes}</h2>
      <h2>{String(true)}</h2>
      {
        true ? <h3>Test</h3> : null
      }

      {
        likes.map(like => <h3 key={like}>{like}</h3>)
      }
    </div>
  );
  ///*One way to create jsx
  // const jsx = <div id ="someId">
  //               <h1 id ="header-id">JSX is awesome!!!</h1>
  //             </div>
  // console.log(jsx);

  // return jsx;
  ///*React.createElement('h1', null, 'JSX is awesome!!!');
  //return React.createElement('h1',null, 'JSX is awesome!!!');
}

export default App;
