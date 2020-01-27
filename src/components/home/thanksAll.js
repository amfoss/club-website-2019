import React from "react"
import gitlab from "../../images/gitlab-icon.svg"

export default () => {
  return (
    <div className="card mx-sm-4 my-sm-4 px-4 py-3">
      <div id="Thanks" className="row">
        <div className="col-md-9">
          
          <h2 className="text-left my-4">Thank You GitLab!</h2>
          <p>
            For enabling us to collaborate and develop using{" "}
            <a href="https://code.amfoss.in">code.amfoss.in</a>, we thank GitLab
            for generously providing us with the GitLab{" "}
            <a href="https://about.gitlab.com/pricing/gitlab-com/feature-comparison/">
              Gold Plan.
            </a>
          </p>
          
          
        </div>

        <div className="col-md-3">
          <a href="https://gitlab.com/">
            <img src={gitlab}></img>
          </a>
        </div>
      </div>
      </div>
    
  )
}
