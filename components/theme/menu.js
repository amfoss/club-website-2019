import React from 'react';
import MenuItem from './menuItem';
import Link from 'next/link';
import homeIcon from '../../public/icons/home.png';
import aboutIcon from '../../public/icons/bulb.png';
import lifeIcon from '../../public/icons/mentorship.png';
import achievementsIcon from '../../public/icons/crown.png';
import membersIcon from '../../public/icons/coworking.png';
import ProjectsIcon from '../../public/icons/project.png';
import blogIcon from '../../public/icons/blog.png';
import newsIcon from '../../public/icons/newsArt.png';
import crowdsIcon from '../../public/icons/crowd.png';

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a>
        <MenuItem name="Home" icon={homeIcon} />
      </a>
    </Link>
    <Link href="/about">
      <a>
        <MenuItem name="About" icon={aboutIcon} />
      </a>
    </Link>
    <Link href="/life">
      <a>
        <MenuItem name="Life in Club" icon={lifeIcon} />
      </a>
    </Link>
    <Link href="/achievements">
      <a>
        <MenuItem name="Achievements" icon={achievementsIcon} />
      </a>
    </Link>
    <Link href="/members">
      <a>
        <MenuItem name="Members" icon={membersIcon} />
      </a>
    </Link>
    <Link href="/projects">
      <a>
        <MenuItem name="Projects" icon={ProjectsIcon} />
      </a>
    </Link>
    {/*<Link href = "/events"><a><MenuItem name="Events" icon={crowdsIcon} /></a></Link>*/}
    <Link href="/news">
      <a>
        <MenuItem name="News" icon={newsIcon} />
      </a>
    </Link>
    <Link href="/blog">
      <a>
        <MenuItem name="Blog" icon={blogIcon} />
      </a>
    </Link>
  </div>
);

export default Menu;
