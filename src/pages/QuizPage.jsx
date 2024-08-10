import { useEffect, useState } from "react";
import Quiz, { getAllQuestions } from "../components/Questions/Quiz";



function QuizPage() {
    

    return (
        <div className="page vertical-page quiz-page">
            <Quiz />
        </div>
    )
}

export default QuizPage; 