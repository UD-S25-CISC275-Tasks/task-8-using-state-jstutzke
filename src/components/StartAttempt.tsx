import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    // two states: number of attempts and the quiz
    // button Start Quiz -> starts quiz, attempts minus one -- DONE
    // button Stop Quiz -> stops quiz, makes it false -- DONE
    // button Mulligan increase attempts by one -- DONE
    // when quiz true: Start Quiz and Mulligan are disabled -- DONE
    // when quiz false: Stop Quiz disabled -- DONE
    // when attempts 0: Start Quiz disabled -- DONE

    const [attempts, setAttempts] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);

    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1),
                            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                            setQuiz(true);
                    }}
                    disabled={attempts === 0 || quiz}
                >
                    Start Quiz
                </Button>
            </span>
            <span>
                <Button
                    onClick={() => {
                        setQuiz(false);
                    }}
                    disabled={!quiz}
                >
                    Stop Quiz
                </Button>
            </span>
            <span>
                <Button
                    onClick={() => {
                        setAttempts(attempts + 1);
                    }}
                    disabled={quiz}
                >
                    Mulligan
                </Button>
            </span>
            <span>Attempts: {attempts}</span>
        </div>
    );
}
