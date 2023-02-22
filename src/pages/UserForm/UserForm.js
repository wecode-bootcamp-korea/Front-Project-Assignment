import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './UserForm.scss';

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: '',
    passwd: '',
    passwdCheck: '',
    name: '',
  });
  const location = useLocation();
  const pathName = location.pathname;

  const handleInput = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="userForm">
      {pathName === '/signup' ? (
        <Signup userData={userData} handleInput={handleInput} />
      ) : (
        <Login userData={userData} />
      )}
    </div>
  );
};

export default UserForm;
