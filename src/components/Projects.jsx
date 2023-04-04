import 'bootstrap/dist/css/bootstrap.min.css'

export default function Projects({ prevStep, nextStep, formData, setFormData }) {
    return (
        <div className="container">
            <div className="m-auto col-5">
                <div className="my-5">
                    <span className="lead border-bottom pb-2">Projects</span>
                </div>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control mb-3"
                />

                <input
                    type="text"
                    placeholder="Designation"
                    className="form-control mb-3"
                />
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary btn-sm px-3' onClick={() => prevStep()}>Previous</button>
                    <button className='btn btn-success btn-sm px-3' onClick={() => nextStep()} >Next</button>
                </div>
            </div>
        </div>
    )
}
