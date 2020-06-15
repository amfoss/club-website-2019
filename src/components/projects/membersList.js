import React from 'react';
import MemberCard from '../theme/memberCard';

const MemberList = ({ members }) => {
  return (
    <div className="row m-0 p-1 mb-4">
      {members.map((member) => (
        <div key={member} className="col-md-4 col-lg-3 col-xl-2 col-6 p-2">
          <MemberCard
            username={member.username}
            firstName={member.firstName}
            lastName={member.lastName}
            profilePic={member.profile.profilePic}
            githubUsername={member.profile.githubUsername}
          />
        </div>
      ))}
    </div>
  );
};
export default MemberList;
