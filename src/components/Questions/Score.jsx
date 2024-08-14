import { useEffect } from "react";

function Score({ firstTime, score, handleTryAgain }) {
    useEffect( () => {
        const pTags = document.querySelectorAll(".score-p"); 
        var delay = 2000;
        for (let i = 0; pTags[i]; i++) {
            delay += 1000;
            setTimeout(() => {
                pTags[i].style.display = "block";
            }, delay)
        }
    }, []);
    return (
        <div className="score-div">
            { firstTime ? 
            <>
                <h1>{"Let's go!"}<em>{"(o 'Los gehts', en aleman!)"}</em></h1>
                <button className="score-btn" onClick={() => handleTryAgain()}>New game</button>
                <div className="score-p-cont">
                    <p className="score-p">Are you ready for some questions today?</p>
                    <p className="score-p">It's gonna be fun!</p>
                    <p className="score-p">And the LORD is involved</p>
                </div>             </> :
            <>
                <h1>Final score: <span>{Math.round(score)}</span></h1>
                <button className="score-btn" onClick={() => handleTryAgain()}>Play Again</button>
                <div className="score-p-cont">
                    <p className="score-p">I hope you took the time to make a pause and breath.</p>
                    <p className="score-p">I hope you enjoyed it.</p>
                    <p className="score-p">Everything will be alright!</p>
                    <p className="score-p">How many times did you go to the translator...?</p>
                </div> 
            </>
            }
        </div>
    )
};

export default Score;