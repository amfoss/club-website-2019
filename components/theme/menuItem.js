import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

const MenuItem = ({ name, link, icon }) => (
  <div className="menu-item">
    {icon !== '' ? <img src={icon} alt={name} /> : null}
    {name}
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
};

MenuItem.defaultProps = {
  name: ``,
  link: `#`,
  icon: ``,
};

export default MenuItem;
