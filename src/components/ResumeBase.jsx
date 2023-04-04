import React, { useState } from 'react';
import Intro from "./Intro";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Preview from "./Preview";


export default function ResumeBase() {
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        intro: '',
        contact: '',
        education: '',
        skills: [],
        experience: [],
        projects: []
    });

    function nextStep() {
        setStep(step + 1);
    }

    function prevStep() {
        setStep(step - 1);
    }

    const conditionalComponent = () => {
        switch (step) {
            case 0:
                return <Intro
                    nextStep={nextStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 1:
                return <Contact
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 2:
                return <Education
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 3:
                return <Skills
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 4:
                return <Experience
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 5:
                return <Projects
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 6:
                return <Preview
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            default:
                return <Intro
                    nextStep={nextStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
        }
    }

    return (
        <>
            {conditionalComponent()}
        </>
    )
}