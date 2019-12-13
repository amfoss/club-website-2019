import React from 'react'
import dataFetch from "../../../../utils/dataFetch"

const query=`
  mutation submitApplication($name: String!, $email: String!, $phone: String!, $formData: JSONString!){
  submitApplication(
    name: $name, 
    email: $email,
    phone: $phone,
    formID: 2,
    formData: $formData
  )
  {
    id
    status
  }
}
`;
const regquery = `
{
  registrationForm(formID:2)
  {
    applicationsCount
  }
}`;


class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      roll: '',
      errorText: '',
      successText: '',
      loading: false,
      count: 0,
      status: '',
      slotsLeft: 60
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleRollChange = this.handleRollChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value.trim() });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value.trim() });
  }
  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  handleRollChange(event) {
    this.setState({ roll: event.target.value.trim() });
  }

  register = async() => {
    const { name, email, phone, gender, roll, agreed, verified } = this.state;
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phoneRegex = /^\d{10}$/;
    const rollRegex = /^AM[.]EN[.](U3|U4)(CSE|AIE|ECE|EAC|ELC|EEE|ME|BCA)[1][6-9][\d][\d][\d]$/;
    if (name === '' || roll === '' || phone === '' || email === '' || gender === '') {
      this.setState({ loading: false, errorText: "Please Fill All the Fields" })
    } else if (emailRegex.test(email) === false) {
      this.setState({ loading: false, errorText: "Enter Proper Email" })
    } else if (phoneRegex.test(phone) === false) {
      this.setState({ loading: false, errorText: "Enter Proper Phone" })
    } else if (rollRegex.test(roll.toUpperCase()) === false) {
      this.setState({ loading: false, errorText: "Enter Amrita Roll Number in proper format - AM.EN.U4XXX00000" })
    } else {
      const json = { 'gender': gender, "rollNo": roll }
      const variables = { name, email, phone, formData: JSON.stringify(json) }
      const response = await dataFetch({ query, variables });
      console.log(response);
      if (Object.prototype.hasOwnProperty.call(response, 'errors')) {
        this.setState({ loading: false, errorText: response.errors[0].message});
      } else {
        this.setState({ successText: response.data.submitApplication.id, errorText: '', status: response.data.submitApplication.status })
      }
    }
  }

  getRegisteredCount = async() => {
    const variables = {formID: 1}
    const response = await dataFetch({ query: regquery, variables });
    this.setState({count: response.data.registrationForm.applicationsCount, slotsLeft: 60-response.data.registrationForm.applicationsCount})
  }

  componentDidMount() {
    this.getRegisteredCount();
  }


  render() {
    return (
      <section id="registration-form">
        <div className="row m-0 d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 p-4 d-flex align-items-center">
            { !this.state.loading ?
              (
                <div>
                  <h2 className="my-4 text-light">
                    <span>{this.state.count}</span> Already Registered.<br />
                    RSVP <span>Now</span></h2>
                </div>) : this.state.successText !== '' ?
                this.state.status === "U" ?
                  (<div className="alert alert-success">
                    <h5>Thank You! Your application is Under Review.</h5>
                    We will get back to soon, meanwhile dont forget to bring your friends as well!
                  </div>) : (<div className="alert alert-warning">
                    <h5>Thank You! Your application has been Wait listed.</h5>
                    Sorry, we might not be able to accommodate everyone this time, stay tuned for more events.
                  </div> ):
                <div className="alert alert-warning">Submitting. Please Wait</div>
            }
          </div>
        </div>
      </section>
    )
  }
}
export default Registration
