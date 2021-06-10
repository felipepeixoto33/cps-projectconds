import React from 'react';
import UserGraphic from './UserGraphic';

const User = (props) => {
  let cost = 45.73;

  return (
    <div>
      <UserGraphic cost={145 + props.cost} />
    </div>
  );
};

export default User;
