import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // two states, one for each die -- DONE
    // can see left die value -- DONE
    // can see right die value -- DONE
    // two roll buttons -- DONE
    // change the value when clicking roll -- DONE
    // initial values are different -- DONE
    // lose when snake eyes -- DONE
    // otherwise always win -- DONE

    const [left, setRoll] = useState<number>(1);
    const [right, setRoll2] = useState<number>(2);

    return (
        <div>
            <Button
                onClick={() => {
                    setRoll(d6);
                }}
            >
                Roll Left
            </Button>
            <span>
                Left Value: <span data-testid="left-die">{left}</span>
            </span>

            <Button
                onClick={() => {
                    setRoll2(d6);
                }}
            >
                Roll Right
            </Button>
            <span>
                Right Value: <span data-testid="right-die">{right}</span>
            </span>
            <div>
                {left === 1 && left === right ? (
                    <span>LOSE</span>
                ) : (
                    <span></span>
                )}
                {left !== 1 && left === right ? (
                    <span>WIN</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
