import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

export default function Education({ prevStep, nextStep, formData, setFormData }) {

    const [education, setEducation] = useState({
        institution: '',
        course: '',
        year: '',
        location: ''
    });

    const next = () => {
        setFormData({
            ...formData,
            education: education
        });
        nextStep();
    }

    return (
        <div className="container">
            <div className="m-auto col-5">
                <div className="my-5">
                    <span className="lead border-bottom pb-2">Education</span>
                </div>
                <input
                    type="text"
                    placeholder="Institution"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setEducation({ ...education, institution: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Course"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setEducation({ ...education, course: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Year"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setEducation({ ...education, year: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Location"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setEducation({ ...education, location: e.target.value })}
                />

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary btn-sm px-3' onClick={() => prevStep()}>Previous</button>
                    <button className='btn btn-success btn-sm px-3' onClick={next} >Next</button>
                </div>
            </div>
        </div>
    )
}
    