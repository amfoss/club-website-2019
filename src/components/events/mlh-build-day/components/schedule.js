import React from "react"

const Schedule = () => {
  return (
    <section id="schedule" className="h-100">
      <h2 className="text-center pt-4">Event Schedule</h2>
      <div className="row mt-4 p-4">
        <div className="col-md-1"/>
        <div className="col-md-10 col-sm-12">
          <table className="table lead table-hover text-center">
            <thead>
            <tr>
              <th className="text-center">Time</th>
              <th className="text-center">Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>08:30AM - 09:00AM</td>
              <td>Arrival and Check-in</td>
            </tr>
            <tr>
              <td>09:00AM - 09:15AM</td>
              <td>Introduction to hackathon, problems released</td>
            </tr>
            <tr>
              <td>9:15AM</td>
              <td>Hackathon starts</td>
            </tr>
            <tr>
              <td>12:00PM - 2:00PM</td>
              <td>Leave for lunch at anytime between 12 and 2</td>
            </tr>
            <tr>
              <td>02:00PM - 05:30PM</td>
              <td>Hackathon continues</td>
            </tr>
            <tr>
              <td>05:30PM</td>
              <td>Hackathon ends</td>
            </tr>
            <tr>
              <td>5:30PM - 6:00PM</td>
              <td>Results and swag distribution</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Schedule