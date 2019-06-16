import React from "react"
import MenuItem from "./menu-item.js"

import homeIcon from "../../images/icons/home.png"
import aboutIcon from "../../images/icons/bulb.png"
import lifeIcon from "../../images/icons/mentorship.png"
import achievementsIcon from "../../images/icons/crown.png"
import membersIcon from "../../images/icons/coworking.png"
import ProjectsIcon from "../../images/icons/project.png"
import blogIcon from "../../images/icons/blog.png"

const Menu = () => (
  <div className="menu">
    <MenuItem name="Home" link="/" icon={homeIcon} />
    <MenuItem name="About" link="/about" icon={aboutIcon} />
    <MenuItem name="Life in Club" link="/life" icon={lifeIcon} />
    <MenuItem
      name="Achievements"
      link="/achievements"
      icon={achievementsIcon}
    />
    <MenuItem name="Members" link="/members" icon={membersIcon} />
    <MenuItem name="Projects" link="/projects" icon={ProjectsIcon} />
    <MenuItem name="News" link="/news" icon={blogIcon} />
  </div>
)

export default Menu
