import { jsPDF } from "jspdf";

function Preview({ prevStep, formData, setFormData }) {

    const Export = () => {
        const doc = new jsPDF('l', 'mm', [1200, 1210]);
        const content = document.getElementById('resume');
        doc.html(content, {
            callback: function (doc) {
                doc.save("resume.pdf");
            },
            x: 10,
            y: 10
        });
    }

    return (
        <div className="container">
            <div className="m-auto col-5">
                <div className="my-5">
                    <span className="lead border-bottom pb-2">Preview</span>
                </div>
                <div id="resume">
                    <div className="row">
                        <div className="col-6">Name</div>
                        <div className="col-6">{ formData.intro.name }</div>
                    </div>
                    <div className="row">
                        <div className="col-6">Designation</div>
                        <div className="col-6">{ formData.intro.designation }</div>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-3'>
                    <button className='btn btn-secondary btn-sm px-3' onClick={() => prevStep()}>Previous</button>
                    <button className='btn btn-success btn-sm px-3' id="export-button" onClick={Export}>Export as PDF</button> 
                </div>
                
            </div>
        </div>
    )
}

export default Preview;