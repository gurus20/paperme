import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

export default function Skills({ prevStep, nextStep, formData, setFormData }) {

    const [skill, setSkill] = useState([
        {
            name: '',
            rating: ''
        }
    ]);

    const next = () => {
        setFormData({
            ...formData,
            skills: skill
        });
        nextStep();
    }

    const addSkill = () => {
        let newSkill = { name: '', rating: '' };
        setSkill([...skill, newSkill]);
    }

    const handleSkillInput = (index, e) => {
        let data = [...skill];
        data[index][e.target.name] = e.target.value;
        setSkill(data);
        setFormData({ ...formData, skills: data });
    }

    return (
        <div className="container">
            <div className="m-auto col-5">
                <div className="my-5">
                    <span className="lead border-bottom pb-2">Skills</span>
                </div>

                {skill.map((input, index) => {
                    return (
                        <div key={index} className="mb-3 d-flex">
                            <input
                                name='name'
                                type="text"
                                placeholder="Skill"
                                className="form-control w-75"
                                value={input.name}
                                onChange={(e) =>
                                    handleSkillInput(index, e)}
                            />

                            <input
                                name='rating'
                                type="text"
                                placeholder="Rating"
                                className="form-control w-25 ms-2"
                                value={input.rating}
                                onChange={(e) =>
                                    handleSkillInput(index, e)}
                            />
                        </div>
                    )
                })}
                <div className="mb-5">
                    <button onClick={addSkill} className="btn btn-success w-100">Add</button>
                </div>

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary btn-sm px-3' onClick={() => prevStep()}>Previous</button>
                    <button className='btn btn-success btn-sm px-3' onClick={next} >Next</button>
                </div>
            </div>
        </div>
    )
}
