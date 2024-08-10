import { useEffect, useState } from "react";



/**
 * 
 * @param {initialTime} param0, the initial time our countdown starts with
 * @returns the given time reduced by 1 second
 */


export function useCountdown({ initialTime, callback }) {
    const [ timer, setTimer ] = useState(initialTime);
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) { setTimer(timer-1) };
        }, 1000)

        if (timer === 0) { callback(); };

        return clearInterval(interval);
        
    }, [timer])
    return timer;
}