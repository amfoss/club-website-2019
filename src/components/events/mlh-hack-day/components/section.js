import React from "react"

const section = ({
     align, background, title, content, counters
}) => {
  return (
    <div className="mlh-section" style={{ 'textAlign': align, 'backgroundColor': background }}>
      <h3>{title}</h3>
      <div>
        {content}
      </div>
      {
         counters.length > 0 ?
           <div className="row m-0 section-counters">
             {counters.map(e =>
               <div className="col-md-3">
                 <div className="big-text">
                   {e.value}
                   {e.plus ? '+' : null}
                 </div>
                 <div>{e.text}</div>
               </div>
             )
             }
           </div> : null
      }
    </div>
  )
}

export default section