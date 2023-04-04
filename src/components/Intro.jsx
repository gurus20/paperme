import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function Intro({ nextStep, formData, setFormData }) {

    const [intro, setIntro] = useState({
        name: '',
        designation: ''
    });

    const next = () => {
        setFormData({
            ...formData,
            intro: intro
        });
        nextStep();
    }

    return (
        <div className="container">
            <div className="m-auto col-5">
                <div className="my-5">
                    <span className="lead border-bottom pb-2">Introduction</span>
                </div>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setIntro({ ...intro, name: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Designation"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setIntro({ ...intro, designation: e.target.value })}
                />
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success btn-sm px-3' onClick={next} >Next</button>
                </div>
            </div>
        </div>
    )
}

export default Intro;
