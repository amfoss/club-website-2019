import React, { useState }  from "react"
import { StaticQuery, graphql } from "gatsby"
import getProfiles from "../theme/getProfiles"
import ListCard from "../theme/list-card"

const MemberList = ({ members }) => {
  let years = [...new Set( members.map(obj => obj.node.Year)) ]
  years =  Array.from(years[0])
  const [year, setYear] = useState(2019);
  const profiles = getProfiles()
  let filtered = members.filter( member => member.node.Year == year)
  return (
    <div className="list-card card">
      <div className="list-heading d-flex">
        <div className="w-75">Google Summer of Code</div>
        <div className="w-25">
          <select
              name="years"
              onChange={event => setYear(event.target.value)}
              value={year}
          >
            {
              years.map((year, key) =>
                 <option key={key} value={year}>{year}</option>
              )
            }
          </select>
        </div>
      </div>
      {
        filtered.map(member => {
          let profile = profiles.find(
            profile => profile.node.username === member.node.Member
          )
          return profile ?
                <ListCard
                  key={member.node.id}
                  username={profile.node.username}
                  firstName={profile.node.firstName}
                  lastName={profile.node.lastName}
                  tagline={member.node.Org}
                  avatar={profile.node.avatar ? profile.node.avatar.childImageSharp.resize.src : null}
                /> : null
        })
      }
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allGSoCYaml {
          totalCount
          edges {
            node {
              id
              Member
              Year
              Org
            }
          }
        }
      }
    `}
    render={data => (
      <div className="p-2 my-4">
          <MemberList members={data.allGSoCYaml.edges} />
      </div>
    )}
  />
)
