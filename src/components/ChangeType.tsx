import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // button labelled Change Type
    // if MCQ, text says Multiple Choice
    // if SAQ, text sats Short Answer
    // default initial type is SAQ

    const [type, setType] = useState<QuestionType>("short_answer_question");

    const CHANGETYPE: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };

    function changeQuestionType(): void {
        const newType = CHANGETYPE[type];
        setType(newType);
    }

    return (
        <div>
            Current type:{" "}
            <span>
                {type === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </span>
            <div></div>
            <Button onClick={changeQuestionType}>Change Type</Button>
        </div>
    );
}
