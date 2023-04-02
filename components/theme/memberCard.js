import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';

import defaultAvatar from '../../public/defaults/avatar.png';

const MemberCard = ({
  username,
  firstName,
  lastName,
  tag,
  tagline,
  githubUsername,
  profilePic,
}) => (
  <div className="member-card card">
    <a href={''}>
      {profilePic ? (
        <Image
          src={profilePic}
          alt="avatar"
          width={100}
          height={100}
          className="avatar"
        />
      ) : githubUsername ? (
        <Image
          src={`https://avatars.githubusercontent.com/${githubUsername}`}
          alt="avatar"
          width={100}
          height={100}
          className="avatar"
        />
      ) : (
        <img
          src={
            githubUsername
              ? `https://avatars.githubusercontent.com/${githubUsername}`
              : defaultAvatar
          }
          alt="avatar"
          width={100}
          height={100}
          className="avatar"
        />
      )}
      <div className={'role-tag ' + tag}>{tag}</div>
      <div>
        {' '}
        <h6>
          {firstName} {lastName}
        </h6>
        <sub>{tagline}</sub>
      </div>
    </a>
  </div>
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
