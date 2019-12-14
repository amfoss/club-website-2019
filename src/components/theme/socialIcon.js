import PropTypes from "prop-types"
import React from "react"

import facebook from "../../images/icons/facebook.png"
import instagram from "../../images/icons/instagram.png"
import twitter from "../../images/icons/twitter.png"
import linkedin from "../../images/icons/linkedin.png"
import github from "../../images/icons/github.png"
import website from "../../images/icons/website.png"
import chatroom from "../../images/icons/chatroom.png"

const SocialIcon = ({ name, link }) => (
  link ? <a href={link} className="social-icon">
    {name === "facebook" ? <img src={facebook} alt={name}/> : null}
    {name === "twitter" ? <img src={twitter} alt={name}/> : null}
    {name === "instagram" ? <img src={instagram} alt={name}/> : null}
    {name === "linkedin" ? <img src={linkedin} alt={name}/> : null}
    {name === "github" ? <img src={github} alt={name}/> : null}
    {name === "website" ? <img src={website} alt={name}/> : null}
    {name === "chatroom" ? <img src={chatroom} alt={name}/> : null}
  </a> : null
)

SocialIcon.propTypes = {
  name: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "github",
    "website",
    "chatroom",
    "web",
  ]),
  link: PropTypes.string,
}

SocialIcon.defaultProps = {
  name: `web`
}

export default SocialIcon
