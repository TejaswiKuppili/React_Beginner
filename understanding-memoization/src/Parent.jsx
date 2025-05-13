import  { useState } from 'react';
import Child from './Child';
import './Parent.css';

const Parent = () => {
    const[count, setCount] = useState(0);
    console.log('Parent component rendered');
    // The parent component will re-render every time the state changes, but the child component will only re-render if its props change.
    return(
        <div className='parent'>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <Child header={`I am a ${count} child`}/>
        </div>
    );
}

export default Parent;