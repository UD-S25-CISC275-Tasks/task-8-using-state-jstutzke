import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎆" | "🥧" | "💘" | "🎂";

export function CycleHoliday(): React.JSX.Element {
    // one state for holiday -- DONE
    // one record for alphabetically going through holidays -- DONE
    // one record for chronologically going through holidays -- DONE
    // rendered view of Holiday: emoji -- DONE
    // Advance by Alphabet button or Advance by Year button -- DONE

    const [holiday, setHoliday] = useState<Holiday>("🥧");

    const ALPHABETICALLY: Record<Holiday, Holiday> = {
        "🎂": "🎄",
        "🎄": "🎆",
        "🎆": "🥧",
        "🥧": "💘",
        "💘": "🎂"
    };

    const CHRONOLOGICALLY: Record<Holiday, Holiday> = {
        "🎆": "💘",
        "💘": "🥧",
        "🥧": "🎂",
        "🎂": "🎄",
        "🎄": "🎆"
    };

    function changeAnnual(): void {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const newHoliday: Holiday = CHRONOLOGICALLY[holiday];
        setHoliday(newHoliday);
    }

    function changeWordWise(): void {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const newHoliday: Holiday = ALPHABETICALLY[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeWordWise}>Advance by Alphabet</Button>
            <Button onClick={changeAnnual}>Advance by Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
