import { useEffect, useState } from "react";

/**
 * @param callback, function to call when timer is 0
 * @returns 
 */

function Timer({ callback }) {

    const [ timer, setTimer ] = useState(30);
    const [ backgroundColor, setBg ] = useState('white');
    const [ width, setwidth ] = useState('100%');

    useEffect(() => {

        const interval = setInterval(() => {
            if (timer > 0) { setTimer(timer-1) };
        }, 1000);

        if (15 < timer && timer < 20) {
            setBg('lightgreen');
        } else if (10 < timer && timer < 15 ) {
            setBg('orange');
        }
        else if (5 < timer && timer < 10 ) {
            setBg('#ff3643');
        }
        else if (0 < timer && timer < 5 ) {
            setBg('red');
        }

        setwidth(`${(Math.round((timer/30)*100))}%`);

        if (timer === 0) { callback() };

        return () => clearInterval(interval);
        
    }, [width, timer])
    return (
        <div className="timer">
            <div className="timer-bar"></div>
        </div>
    )
}

export default Timer;