import React, { useState } from 'react';
import ListCard from '../theme/listCard';
import defaultAvatar from '../../public/defaults/avatar.png';

const AchievementList = ({ title, achievements }) => {
  let years = [...new Set(achievements.map((obj) => obj.year))];
  const [year, setYear] = useState(years[0]);
  let filtered = achievements.filter((achievement) => achievement.year == year);

  return (
    <div className="list-card card">
      <div className="list-heading d-flex">
        <div className="w-75">{title}</div>
        <div className="w-25">
          <select
            name="years"
            onChange={(event) => setYear(event.target.value)}
            value={year}
          >
            {years.map((year, key) => (
              <option key={key} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filtered.map((achievement) => {
        return (
          <ListCard
            key={achievement.user.username}
            username={achievement.user.username}
            firstName={achievement.user.firstName}
            lastName={achievement.user.lastName}
            tagline={achievement.title}
            avatar={
              achievement.user.profile.profilePic
                ? `https://api.amfoss.in/${achievement.user.profile.profilePic}`
                : defaultAvatar
            }
          />
        );
      })}
    </div>
  );
};

export default AchievementList;
