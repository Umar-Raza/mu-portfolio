import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { firestore } from '../../config/firebase'
import '../../config/global'



const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  massage: ""
}

export default function Contact() {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)








  const handleChange = (e) => {
    const { name, value } = e.target
    // {/*long code*/ }
    // // setState((previousState) => ({ ...previousState, [name]: value }))

    // {/*short code*/ }
    setState(s => ({ ...s, [name]: value }))

  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    let { firstName, lastName, email, subject, massage } = state

    firstName = firstName.trim()
    lastName = lastName.trim()
    subject = subject.trim()
    massage = massage.trim()

    if (firstName.length < 3) {
      return window.toastify("Please enter your First name correctly", "error")
    }

    if (lastName.length < 3) {
      return window.toastify("Please enter your Last name correctly", "error")
    }

    if (!window.isEmail(email)) {
      return window.toastify("Please enter your email correctly", "error")
    }

    if (subject.length < 3) {
      return window.toastify("Please enter your Subject correctly", "error")
    }

    if (massage.length < 10) {
      return window.toastify("Please enter your massage correctly", "error")
    }

    console.log(firstName, lastName, email, subject, massage);

    let formData = {
      firstName, lastName, email, subject, massage,
      id: window.getRandomId(),
      dateCreated: serverTimestamp(),
    }


    setIsProcessing(true)

    try {
      const docRef = await addDoc(collection(firestore, "masages"), formData);
      setState(initialState)
      window.toastify("Your massage has been successfully send", "success")
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      window.toastify("Somothing went wrong while sanding massage", "error")

    }
    setIsProcessing(false)
  }

  return (
    <>
      <div className="contactBg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="card">
                <div className="contactHadding">
                  <h1>CONTACT</h1>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="conatacDiv">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-12 col-md-6" >
                            <div className="form-floating" >
                              <input type="text" className="form-control " placeholder="First Name" name='firstName' value={state.firstName} onChange={handleChange} />
                              <label>First Name*</label>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-floating">
                              <input type="text" className="form-control " id="floatingInput" placeholder="Last Name" name='lastName' value={state.lastName} onChange={handleChange} />
                              <label >Last Name*</label>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-floating">
                              <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" name='email' value={state.email} onChange={handleChange} />
                              <label >Email address*</label>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-floating">
                              <input type="text" className="form-control " placeholder="Subject" name='subject' value={state.subject} onChange={handleChange} />
                              <label>Subject*</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea className="form-control " placeholder="Leave a massage here" id="floatingTextarea2" name='massage' value={state.massage} onChange={handleChange} ></textarea>
                              <label>Message*</label>
                            </div>
                          </div>
                          <div className='col-12 col-md-6  offset-md-4 downloadBtn mt-4 mb-5 '>
                            <button className=' w-50' disabled={isProcessing}>
                              {!isProcessing
                                ? <span>Submit <i className="bi bi-send p-2"></i></span>
                                : <div className='spinner spinner-grow spinner-grow-sm'></div>
                              }
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}
