import PropTypes from 'prop-types';
import React from 'react';

import facebook from '../../public/icons/facebook.png';
import instagram from '../../public/icons/instagram.png';
import twitter from '../../public/icons/twitter.png';
import linkedin from '../../public/icons/linkedin.png';
import github from '../../public/icons/github.png';
import website from '../../public/icons/website.png';
import chatroom from '../../public/icons/chatroom.png';
import gitlab from '../../public/icons/gitlab.png';
import gmail from '../../public/icons/gmail.png';

const SocialIcon = ({ name, link }) =>
  link ? (
    <a href={link} className="social-icon">
      {name === 'facebook' ? <img src={facebook} alt={name} /> : null}
      {name === 'twitter' ? <img src={twitter} alt={name} /> : null}
      {name === 'instagram' ? <img src={instagram} alt={name} /> : null}
      {name === 'linkedin' ? <img src={linkedin} alt={name} /> : null}
      {name === 'github' ? <img src={github} alt={name} /> : null}
      {name === 'website' ? <img src={website} alt={name} /> : null}
      {name === 'chatroom' ? <img src={chatroom} alt={name} /> : null}
      {name === 'gitlab' ? <img src={gitlab} alt={name} /> : null}
      {name === 'gmail' ? <img src={gmail} alt={name} /> : null}
    </a>
  ) : null;

SocialIcon.propTypes = {
  name: PropTypes.oneOf([
    'facebook',
    'twitter',
    'instagram',
    'linkedin',
    'github',
    'website',
    'chatroom',
    'gmail',
    'gitlab',
    'web',
  ]),
  link: PropTypes.string,
};

SocialIcon.defaultProps = {
  name: `web`,
};

export default SocialIcon;
