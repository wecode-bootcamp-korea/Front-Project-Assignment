import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './UserForm.scss';

const UserForm = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="userForm">
      {pathName === '/signup' ? <Signup /> : <Login />}
    </div>
  );
};

export default UserForm;
