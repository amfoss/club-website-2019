import React, { useState } from 'react';
import dataFetch from '../../../../utils/dataFetch';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [roll, setRoll] = useState('');
  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');
  const [loading, setLoading] = useState(false);

  const query = `
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

  const submitForm = async (variables) => dataFetch({ query, variables });

  const register = () => {
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phoneRegex = /^\d{10}$/;
    if (
      name === '' ||
      roll === '' ||
      phone === '' ||
      email === '' ||
      gender === ''
    ) {
      setLoading(false);
      setErrorText('Please Fill All the Fields');
    } else if (emailRegex.test(email) === false) {
      setLoading(false);
      setErrorText('Enter Proper Email');
    } else if (phoneRegex.test(phone) === false) {
      setLoading(false);
      setErrorText('Enter Proper Phone No');
    } else {
      const json = { gender: gender, rollNo: roll };
      const variables = { name, email, phone, formData: JSON.stringify(json) };
      submitForm(variables).then((r) => {
        if (Object.prototype.hasOwnProperty.call(r, 'errors')) {
          setErrorText(r.errors[0].message);
        } else {
          setSuccessText(r.data.id);
          setErrorText('');
        }
      });
    }
  };
  return (
    <section id="registration-form">
      <div className="container p-3">
        {!loading ? (
          <div>
            <h1 className="my-4 text-light">
              Join <span>Us</span>
            </h1>
            <div className="alert alert-warning">
              If you are facing any technical issues, or if your friend didn't
              recieve a confirmation email yet, please mail us at
              opentalks@amfoss.in. We are sorry for any inconvenience caused.
            </div>
            <p style={{ color: 'red' }}>
              * Meetup only open for students of Amritapuri Campus
            </p>
            <form
              className="form-group"
              onSubmit={(e) => {
                setLoading(true);
                register();
                e.preventDefault();
              }}
            >
              <div className="row">
                <div className="col-12 p-0">
                  <div className="m-2">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      name="name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setRoll(e.target.value.trim())}
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
                      onChange={(e) => setEmail(e.target.value.trim())}
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
                      onChange={(e) => setPhone(e.target.value.trim())}
                    />
                  </div>
                </div>
                <div className="col-sm-6 p-0">
                  <div className="m-2">
                    <select
                      className="form-control text-light"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" hidden disabled selected>
                        Select Gender
                      </option>
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
                    <label
                      className="form-check-label text-light"
                      htmlFor="undertaking"
                    >
                      By submitting this application, I agree to the{' '}
                      <a href="#" className="text-light">
                        Code of Conduct
                      </a>{' '}
                      &{' '}
                      <a href="#" className="text-light">
                        Privacy Policy
                      </a>{' '}
                      of the organizers.
                    </label>
                  </div>
                </div>
                {errorText !== '' ? (
                  <div
                    className="w-100 w-100 text-center m-2 alert alert-danger"
                    role="alert"
                  >
                    {errorText}
                  </div>
                ) : null}
                <div className="col-12 p-0 text-center text-md-right">
                  <div className="m-2">
                    <button
                      type="submit"
                      className="button btn-block px-4 text-dark"
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : successText !== '' ? (
          <div className="alert alert-success">
            Thank You! You have successfully signed up for the event. We will get
            back to soon, meanwhile dont forget to bring your friends as well!
          </div>
        ) : (
          <div className="alert alert-warning">Submitting. Please Wait</div>
        )}
      </div>
    </section>
  );
};

export default Registration;
