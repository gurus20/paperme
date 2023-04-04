import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

export default function Intro({ prevStep, nextStep, formData, setFormData }) {

    const [contact, setContact] = useState({
        phone: '',
        email: '',
        website: '',
        github: '',
        linkedin: ''
    });

    const next = () => {
        setFormData({
            ...formData,
            contact: contact
        });
        nextStep();
    }

    return (
        <div className="container">
            <div className="m-auto col-5">
                <div className="my-5">
                    <span className="lead border-bottom pb-2">Contact Information</span>
                </div>
                <input
                    type="text"
                    placeholder="Phone"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setContact({ ...contact, phone: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Website"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setContact({ ...contact, website: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Github"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setContact({ ...contact, github: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="LinkedIn"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setContact({ ...contact, linkedin: e.target.value })}
                />

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary btn-sm px-3' onClick={() => prevStep()}>Previous</button>
                    <button className='btn btn-success btn-sm px-3' onClick={next} >Next</button>
                </div>
            </div>
        </div>
    )
}
