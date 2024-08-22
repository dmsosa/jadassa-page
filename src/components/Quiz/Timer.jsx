import { useEffect, useState } from "react";

/**
 * @param callback, function to call when timer is 0
 * @returns 
 */

function Timer({ callback }) {

    const [ timer, setTimer ] = useState(30);
    const [ width, setwidth ] = useState('100%');

    useEffect(() => {

        const interval = setInterval(() => {
            if (timer > 0) { setTimer(timer-1) };
        }, 1000);


        setwidth(`${(Math.round((timer/30)*100))}%`);

        if (timer === 0) { callback() };

        return () => clearInterval(interval);
        
    }, [timer])
    return (
        <div className="timer">
            <div className="timer-bar"></div>
        </div>
    )
}

export default Timer;