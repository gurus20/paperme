import React, { useState } from 'react';
import Intro from "./Intro";
import Preview from "./Preview";

export default function ResumeBase() {
    const [step, setStep] = useState(0);

    const conditionalComponent = () => {
        switch (step) {
            case 0:
                return <Intro />;
            case 1:
                return <Preview />;
        };

    }
    return (
        <>
            {conditionalComponent()}
        </>
    )

}