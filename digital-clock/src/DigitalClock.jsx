import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(()=> {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        //When the component unmounts, clear the interval to prevent memory leaks
        //and to stop the clock when the component is not visible
        return () => clearInterval(intervalId);
    },[]);

    function formatTime(date) {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        // Convert to 12-hour format
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    // Helper function to pad single-digit numbers with a leading zero
    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;