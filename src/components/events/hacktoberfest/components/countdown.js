import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if(time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    } else {
      const seconds = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor(time/(1000*60*60*24));

      this.setState({ days, hours, minutes, seconds });
    }

  }

  render() {
    return(
      <section id="counter" className="d-flex align-items-center">
          <div className="row m-0 w-100">
            <div className="part p-4 col-6 col-md-3">
              {this.leading(this.state.days)}
              <span>Days</span>
            </div>
            <div className="part p-4 col-6 col-md-3">
              {this.leading(this.state.hours)}
              <span>Hours</span>
            </div>
            <div className="part p-4 col-6 col-md-3">
              {this.leading(this.state.minutes)}
              <span>Minutes</span>
            </div>
            <div className="part p-4 col-6 col-md-3">
              {this.leading(this.state.seconds)}
              <span>Seconds</span>
            </div>
          </div>
      </section>
    );
  }
}
export default Countdown;