import React from "react"

const TitleBar = ({ title, type }) => (
  <div className="title-card">
    { type ?
        type === "h3" ?
          <h3>{title}</h3> :
          type === "h2" ?
            <h2>{title}</h2> : null :
        <h1>{title}</h1>
    }
  </div>
)

export default TitleBar
