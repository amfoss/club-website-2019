import React, { useState } from "react"
import dataFetch from "../../../../utils/dataFetch"
import BuildDayImg from "../images/registration.png" 

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [roll , setRoll] = useState("")
  const [errorText, setErrorText] = useState("")
  const [successText, setSuccessText] = useState("")
  const [loading, setLoading] = useState(false)

  const query=`
  mutation submitApplication($name: String!, $email: String!, $phone: String!, $formData: JSONString!){
  submitApplication(
    name: $name, 
    email: $email,
    phone: $phone,
    formID: 4,
    formData: $formData
  )
  {
    id
  }
}
`;

  const submitForm = async variables =>
    dataFetch({ query, variables });

  const register = () => {
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phoneRegex = /^\d{10}$/;
    const rollRegex = /^AM[.]EN[.]U4(CSE|AIE|ECE|EAC|ELC|EEE|ME)[1][6-9][\d][\d][\d]$/;
    if (name === '' || roll === '' || phone === '' || email === '' || gender === '') {
      setLoading(false)
      setErrorText("Please Fill All the Fields")
    } else if (emailRegex.test(email) === false) {
      setLoading(false)
      setErrorText( "Enter Proper Email")
    } else if (phoneRegex.test(phone) === false) {
      setLoading(false)
      setErrorText( "Enter Proper Phone No")
    } else if (rollRegex.test(roll.toUpperCase()) === false) {
      setErrorText("Enter Amrita Roll Number in proper format - AM.EN.U4XXX00000")
      setLoading(false)
    } else {
      const json = { 'gender': gender, "rollNo": roll }
      const variables = { name, email, phone, formData: JSON.stringify(json) }
     submitForm(variables).then(r=>{
       if (Object.prototype.hasOwnProperty.call(r, "errors")) {
         setErrorText(r.errors[0].message)
       } else {
         setSuccessText(r.data.id)
         setErrorText("")
       }
     })
    }
  }
  return (
    <section id="registration-form">
      <div className="row m-0">
        <div className="col-md-4 p-4 text-center" style={{marginTop: '3vh'}}>
          <img src={BuildDayImg} alt="Build Day" />
        </div>
        <div className="col-md-8 p-4 d-flex align-items-center">
          { !loading ?
            (
              <div>
                <h2 className="my-4">
                  Register <span>Now</span></h2>
                <p className="text-dark">
                  Sign up for the meet-up for free by filling up the form below,
                  and make sure you do that fast as we have limited seats to fit you
                  all in! Also, don't forget to bring in your friends as well :)
                </p>
                <p style={{ color: 'red'}}>* Meetup only open for students of Amritapuri Campus</p>
                <form
                  className="form-group"
                  onSubmit={e => {
                    setLoading(true);
                    register();
                    e.preventDefault();
                  }}>
                  <div className="row">
                    <div className="col-12 p-0">
                      <div className="m-2">
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          name="name"
                          className="form-control"
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 p-0">
                      <div className="m-2">
                        <input
                          type="text"
                          placeholder="Enter Roll Number"
                          name="Roll No"
                          className="form-control"
                          onChange={e => setRoll(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 p-0">
                      <div className="m-2">
                        <input
                          type="text"
                          placeholder="Enter Email"
                          name="email"
                          className="form-control"
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 p-0">
                      <div className="m-2">
                        <input
                          type="text"
                          placeholder="Enter Phone"
                          name="phoneno"
                          className="form-control"
                          onChange={e => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 p-0">
                      <div className="m-2">
                        <select className="form-control text-light" onChange={e => setGender(e.target.value)}>
                          <option value="" hidden disabled selected>Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 p-0">
                      <div className="m-2" />
                    </div>
                    <div className="col-12 form-check">
                      <div className="m-2 text-dark text-center d-flex justify-content-center">
                        <label className="form-check-label text-dark" htmlFor="undertaking">
                          By submitting this application, I agree to the <a href="#" className="text-dark">Code of Conduct</a> & <a href="#" className="text-dark">Privacy Policy</a> of the organizers.
                        </label>
                      </div>
                    </div>
                    {
                      errorText !== '' ?
                        <div className="w-100 w-100 text-center m-2 alert alert-danger" role="alert">
                          {errorText}
                        </div> : null
                    }
                    <div className="col-12 p-0 text-center text-md-right">
                      <div className="m-2">
                        <button
                          type="submit"
                          className="button btn-block px-4"
                        >
                          REGISTER
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>) : successText !== '' ? (<div className="alert alert-success">
                Thank You! You have successfully signed up for the event.
                We will get back to soon, meanwhile dont forget to bring your friends as well!
              </div>) :
              <div className="alert alert-warning">Submitting. Please Wait</div>
          }
        </div>
      </div>
    </section>
  )
}

export default Registration