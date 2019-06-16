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
        <div className="text-center">

            <Typing speed={50} >
              <h3>
              <span>A Student Community of Open Source Enthusiasts</span>
              <Typing.Reset count={1} delay={500} />
              <span>We promote & contribute to</span>
              <Typing.Reset count={1} delay={500} />
              <span>Open Source Technologies.</span>
              <Typing.Reset count={1} delay={500} />
              <span>We mentor students to achieve excellence in </span>
              <Typing.Reset count={1} delay={500}/>
              <span>Technical and Non-Technical Skills.</span>
              <Typing.Reset count={1} delay={500}/>
              <span>We are FOSS@Amrita.</span>
              <Typing.Reset count={1} delay={500}/>
              </h3>
              <h1>
                India's Leading <span>FOSS & Computer Science Club.</span>
              </h1>
            </Typing>
        </div>
      </div>
    </div>
  )
}
