import React from 'react';
import './UserGraphic.css';

interface UserProps {
  cost: number;
}

const User = (props: UserProps) => {
  return (
    <>
      <div className="container user-box">
        <div className="user-grid">
          <div className="user-img-box">
            <img
              id="user-img"
              src={`${process.env.PUBLIC_URL}/images/user-photo.jpg`}
              alt="user image"
              style={{ width: 100, height: 140, borderRadius: '10px' }}
            />
          </div>

          <label className="user-name">Name: Andrea</label>

          <label className="user-apartment">Apartment: C12</label>

          <label className="user-spent">Current Spend: ${props.cost}</label>
        </div>
      </div>
    </>
  );
};
export default User;
