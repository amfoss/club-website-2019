import React from 'react';
import dataFetch from "../../../../utils/dataFetch";

const query = `
mutation($formID: Int!, $hash: String!,$phone: String!, $response: Boolean!)
{
  submitRSVP(formID:$formID, hash: $hash, phone: $phone, response: $response)
  {
    status
  }
}
`

class RSVPForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      response: true,
      loading: false,
      successText: '',
      errorText: ''
    }
  }
  submit = async() =>
  {
    const variables = {
      'formID': 2,
      'hash': this.props.hash,
      'phone': this.state.phone,
      'response': this.state.response
    };
    const response = await dataFetch({ query, variables });
    if (Object.prototype.hasOwnProperty.call(response, 'errors')) {
      this.setState({ loading: false, errorText: response.errors[0].message});
    } else {
      this.setState({
        successText: response.data.submitRSVP.status,
        errorText: ''
      })
    }
  }

  render() {
    return(
      <div className="d-flex m-0 text-light align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: 'black'}}>
        <div className="p-4">
          <h1>RSVP for MLH Local Build Day 2019, Amritapuri</h1>
          <p>
            Thank you so much for showing interest in Local Build Day,
            organized by amFOSS, in association with MLH.
          </p>
          <div className="alert alert-warning">
            If you are facing any technical issues, or if your friend didn't recieve
            a confirmation email yet, please ping +91 8139056887 on Telegram/WhatsApp.
            We are sorry for any inconvenience caused.
          </div>
          {!this.state.loading ?
            <form
              onSubmit={e => {
                this.setState({ loading: true });
                this.submit();
              }}
              className="form-group">
              <div className="row">
                <div className="col-12 col-md-6 p-2">
                  <label>Will you be attending in the event?</label>
                  <select className="form-control" onChange={(e) => this.setState({response: e.currentTarget.value === "true" })}>
                    <option value="" hidden disabled selected>Select Response</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 p-2">
                  <label>Enter your registered phone number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone"
                    name="phoneno"
                    className="form-control"
                    onChange={(e) => this.setState({ phone: e.currentTarget.value })}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button btn-block px-4"
                    style={{backgroundColor:'white'}}
                  >
                    Submit RSVP
                  </button>
                </div>
              </div>
            </form> : this.state.successText !== '' ?
              <div className="alert alert-success">Thank you! Please inform your friends too about submitting their RSVP.</div>
              : <div className="alert alert-warning">Submitting. Please Wait</div>
          }
          {
            this.state.errorText !== '' ?
              <div className="w-100 w-100 text-center m-2 alert alert-danger" role="alert">
                {this.state.errorText}
              </div> : null
          }
        </div>
      </div>
    )
  }
}

export default RSVPForm;