import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import defaultAvatar from '../../images/defaults/avatar.png';

const MemberCard = ({
  username,
  firstName,
  lastName,
  tag,
  tagline,
  githubUsername,
  profilePic,
}) => (
  <Link to={'/@' + username} className="member-card card">
    <img
      src={
        profilePic
          ? `https://api.amfoss.in/${profilePic}`
          : githubUsername
          ? `https://avatars.githubusercontent.com/${githubUsername}`
          : defaultAvatar
      }
      alt={firstName + ' ' + lastName + `'s photo`}
    />
    <div className={'role-tag ' + tag}>{tag}</div>
    <div>
      <h6>
        {firstName} {lastName}
      </h6>
      <sub>{tagline}</sub>
    </div>
  </Link>
);

MemberCard.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  tagline: PropTypes.string,
  tag: PropTypes.string,
  githubUsername: PropTypes.string,
};

MemberCard.defaultProps = {
  username: '',
  firstName: '',
  lastName: '',
  avatar: '',
  tagline: '',
  tag: 'Member',
  githubUsername: '',
};

export default MemberCard;
