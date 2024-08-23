import { useEffect, useState } from "react";

function Score({ firstTime, score, maxScore, handleTryAgain }) {

    const [ barWidth, setBarWidth ] = useState(0);
    const [ bg, setBg ] = useState("#fc030f");

    const showParagraphs = () => {

        const pTags = document.querySelectorAll(".score-p"); 
        var delay = 0;
        for (let i = 0; pTags[i]; i++) {
            delay += 1000;
            setTimeout(() => {
                pTags[i].style.display = "block";
            }, delay)
        }
        delay = 10000;
        for (let i = 0; pTags[i]; i++) {
            delay += 1000;
            setTimeout(() => {
                pTags[i].style.display = "none";
            }, delay)
        }
    }

    useEffect(() => {
        const percent = (score/maxScore) * 100;
        setBarWidth(percent);

        if (0 < barWidth && barWidth < 20) {
            setBg("#fc030f") //red
        } else if ( 20 < barWidth && barWidth < 40 ) {
            setBg("#fc8403") //orange
        } else if ( 40 < barWidth && barWidth < 60 ) {
            setBg("#fcfc03") //yellow
        } else if ( 60 < barWidth && barWidth < 80 ) {
            setBg("#befc03") //light green
        } else if ( 80 < barWidth && barWidth <= 100 ) {
            setBg("#41fc03") //green
        }
    }, [score, maxScore]);
    return (
        <div className="score-div">
            { firstTime ? 
            <>
                <h1>{"Let's go!"}<em>{"(o 'Los gehts', en aleman!)"}</em></h1>
                <button className="score-btn" 
                onClick={() => handleTryAgain()} 
                onMouseOver={showParagraphs}
                onTouchMove={showParagraphs}
                >New game</button>
                <div className="score-p-cont">
                    <p className="score-p">Are you ready for some questions today?</p>
                    <p className="score-p">It's gonna be fun!</p>
                    <p className="score-p">And the LORD is involved</p>
                </div>             </> :
            <>
                <h1>Final score: {Math.round(score)} / <span>{maxScore}</span> </h1>
                <div className="score-bar">
                    <div className="score-bar-inner" style={{maxWidth: `${barWidth}%`, backgroundColor: bg }}></div>
                </div>
                <button className="score-btn" 
                onClick={() => handleTryAgain()}
                onMouseOver={showParagraphs}
                onTouchMove={showParagraphs}>Play Again</button>
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