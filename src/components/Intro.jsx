import 'bootstrap/dist/css/bootstrap.min.css'

function Intro({ nextStep, handleChange, values }) {

    const Next = e => {
        e.preventDefault();
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
                    value={values.name}
                    onChange={handleChange('name')}
                    className="form-control mb-3"
                />

                <input
                    type="text"
                    placeholder="Designation"
                    value={values.designation}
                    onChange={handleChange('designation')}
                    className="form-control mb-3"
                />
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success btn-sm px-3' onClick={Next}>Next</button>
                </div>

            </div>
        </div>
    )
}

export default Intro;
