import { useState } from "react";
import { getAllQuestions } from "../../services/questions";
import QuestionCard from "./QuestionCard";
import Score from "./Score";
import ProgressBar from "./ProgressBar";

function Quiz() {
    const [ questions, setQuestions ] = useState(getAllQuestions());
    const [ showScore, setShowScore ] = useState(true);
    const [ finalScore, setFinalScore ] = useState(0);
    const [ attemps, setAttemps ] = useState(0);    
    const pointsPerQuestion = 10000 / questions.length;

    const sumToScore = (points) => {
        if (finalScore + points > 10000) {
            setFinalScore(10000);
            return;
        }
        setFinalScore(finalScore + points);
    }


    const handleTryAgain = () => {
        // all questions without answer
        setQuestions(questions.map((q) => { 
            q.answered = false 
            return q;
        })); 
        setShowScore(false);
        setFinalScore(0);
        setAttemps(attemps+1);
    }


    return (
        showScore ? 
            <>
                <Score 
                firstTime={attemps < 1} 
                score={finalScore} 
                setShowScore={setShowScore} 
                handleTryAgain={handleTryAgain} /> 
            </>
            :
            <>
                <div className="quiz-wrapper">
                    <ProgressBar finalScore={finalScore}/>
                    <div className="quiz-container">
                        {questions.map((question, index) => 
                        <>
                            <QuestionCard 
                            key={index}
                            question={question} 
                            index={index} 
                            sumToScore={sumToScore} 
                            pointsPerQuestion={pointsPerQuestion}
                            setQuestions={setQuestions} 
                            setShowScore={setShowScore}
                            allQuestions={questions}/>

                        </>
                        )}
                    </div>
                </div>

            </>)    
    
}

export default Quiz;