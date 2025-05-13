import { useRef, useEffect } from "react";

const Focus = () => {
    const inputElemRef = useRef();
    useEffect( () => {
        inputElemRef.current.focus();
        inputElemRef.current.style.backgroundColor = 'lightblue';
        inputElemRef.current.style.color = 'white';
        inputElemRef.current.style.fontSize = '20px';
        inputElemRef.current.style.padding = '10px';
        inputElemRef.current.style.border = '2px solid blue';
        inputElemRef.current.style.borderRadius = '5px';
    }, []);

    return (
        <>
        <h1>Focus</h1>
        <input type="text" ref={inputElemRef}/>
        </>
    )
}

export default Focus;