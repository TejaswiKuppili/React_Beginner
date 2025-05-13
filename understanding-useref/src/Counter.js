import { useState, useRef, useEffect } from 'react';

const Counter = () => {
    const countRef = useRef(0);
    // const handleClick = () => {
    //     setCount((prevCount) => prevCount + 1);
    // }
    const[searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        // setCount((prevCount) => prevCount + 1);
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
    })
    return (
        <>
            <h1>Counter: {countRef.current}</h1>
            {/* <button onClick={handleClick}>Click Me - Use Ref</button> */}
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            <h2>{countRef.current}</h2>
        </>
    )
}

export default Counter;