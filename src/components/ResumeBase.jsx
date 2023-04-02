import React, { Component } from "react";
import Intro from "./Intro";
import Links from "./Contact"
import Preview from "./Preview";

export default class ResumeBase extends Component {

    state = {
        step: 1,
        intro: {
            name: "",
            designation: ""
        }
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state
        const { intro, contact, skills } = this.state
        const values = { intro, contact, skills }

        switch (step) {
            case 1:
                return (
                    <Intro
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Links
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Preview
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
            // Do Noting
        }

    }
}