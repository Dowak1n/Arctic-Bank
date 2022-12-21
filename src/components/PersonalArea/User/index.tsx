// libraries
import React from 'react';
// api
import { logoutUser } from 'api';
// types
import { Data } from 'types/types';
import { useNavigate } from 'react-router-dom';
// components

const User = ({ userInfoData }: Data) => {
  const navigate = useNavigate();

  const buttonSubmit = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="user-container">
      <div className="user-content">
        <h2>User Info</h2>
        <div>
          <p className="user-text">
            {'First name: '}
            <span className="user-text-info">
              {userInfoData ? userInfoData.firstName : '...'}
            </span>
          </p>
          <p className="user-text">
            {'Last name: '}
            <span className="user-text-info">
              {userInfoData ? userInfoData.lastName : '...'}
            </span>
          </p>
          <p className="user-text">
            {'Email: '}
            <span className="user-text-info">
              {userInfoData ? userInfoData.email : '...'}
            </span>
          </p>
          <p className="user-text">
            {'Passport Number: '}
            <span className="user-text-info">
              {userInfoData ? userInfoData.passportNumber : '...'}
            </span>
          </p>
          <p className="user-text">
            {'birthDay: '}
            <span className="user-text-info">
              {userInfoData ? `${userInfoData.day}.${userInfoData.month}.${userInfoData.year}` : '...'}
            </span>
          </p>
        </div>
        <button
          className="button exit"
          onClick={buttonSubmit}
          type="submit"
        >
          Exit from profile
        </button>
      </div>
    </div>
  );
};

export default User;
