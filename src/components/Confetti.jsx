import { useEffect, useState } from "react";

function Confetti() {
    const count = 200;
    const [confetti, setConfetti] = useState([]);

    const generateConfetti = () => {
        let list = [];
        for (let i = 0; i < count; i++ ) { 
            list.push( <div className="confetti" key={i}></div>)
        }
        return list;
    }

    useEffect(() => {
        if (confetti.length < 1) {
            setConfetti(generateConfetti());
        };
    }, [confetti.length])

    return (
    <div className="confetti-container">
        {confetti.map((c) => (c))}
    </div>)
}

export default Confetti;