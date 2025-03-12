import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // reveal the answer to the user by clicking a button
    // text is starting off as hidden
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
