import { useEffect, useState } from "react";

/**
 * @param callback, function to call when timer is 0
 * @returns 
 */

function Timer({ callback }) {

    
    const [ time, setTime  ] = useState(30);


    useEffect(() => {
        if (time === 0) {
            callback();
        } else {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }

    }, [time])
    return (
        <div className="timer">
            <div className="timer-bar"></div>
        </div>
    )
}

export default Timer;<kbd></kbd>