// import 'bootstrap/dist/css/bootstrap.min.css'

// function Contact({ prevStep, nextStep, handleChange, values }) {

//     const Next = e => {
//         e.preventDefault();
//         nextStep();
//     }

//     const Previous = e => {
//         e.preventDefault();
//         prevStep();
//     }

//     return (
//         <div className="container">
//             <div className="m-auto col-5">
//                 <div className="my-5">
//                     <span className="lead border-bottom pb-2">Contact Information</span>
//                 </div>

//                 <input
//                     type="text"
//                     placeholder="Phone"
//                     value={values.contact.phone}
//                     onChange={handleChange('contact')}
//                     className="form-control mb-3"
//                 />

//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={values.contact.email}
//                     onChange={handleChange('contact')}
//                     className="form-control mb-3"
//                 />

//                 <p className='text-secondary'>Social Links</p>
// {/* 
//                 <input
//                     type="text"
//                     placeholder="Github"
//                     value={values.contact.social.github}
//                     onChange={handleChange('contact')}
//                     className="form-control mb-3"
//                 />

//                 <input
//                     type="text"
//                     placeholder="LinkedIn"
//                     value={values.contact.social.linkedin}
//                     onChange={handleChange('contact')}
//                     className="form-control mb-3"
//                 />

//                 <input
//                     type="url"
//                     placeholder="Website"
//                     value={values.contact.social.website}
//                     onChange={handleChange('contact')} 
//                     className="form-control mb-3"
//                 /> */}

//                 <div className='d-flex justify-content-between'>
//                     <button className='btn btn-secondary btn-sm px-3' onClick={Previous}>Previous</button>
//                     <button className='btn btn-success btn-sm px-3' onClick={Next}>Next</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Contact;
