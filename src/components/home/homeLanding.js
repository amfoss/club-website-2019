import React from "react"
import Typing from 'react-typing-animation';

export default () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     cover: allFile(filter: { name: { eq: "cover"}, extension: { eq: "jpg"}})
  //     {
  //       nodes
  //       {
  //         childImageSharp
  //         {
  //           fluid
  //           {
  //             src
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div
        id="home-landing"
    >
      <div className="overlay">
        <div id="landing-btn">
          <a href="#home-section-1" className="fa fa-chevron-down animated infinite bounceOutDown delay-2s slow" />
        </div>
        <div id="landing-info">
          <div>
            <h1>
              India's Leading <span>FOSS & Computer Science Club.</span>
            </h1>
            <p className="d-none d-md-block">
              amFOSS, a student-run community with over 50+ members from Amrita Vishwa Vidyapeetham, Amritapuri, over the last 12 years,
              has helped 100+ passionate students to transform into successful & innovative engineers who today work across the
              world in Fortune 500 Companies loving what they do.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}
