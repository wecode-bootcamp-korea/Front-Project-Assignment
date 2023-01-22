import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './UserForm.scss';

const UserForm = () => {
  const location = useLocation();
  const [inputValues, setInputValues] = useState({
    loginid: '',
    loginpw: '',
    signupid: '',
    signuppw: '',
    signuppwconfirm: '',
    signupname: '',
    pwconfirmationvalid: false,
    pwconfirmationalert: '',
  });

  const saveUserInfo = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return location.pathname === '/login' ? (
    <Login inputValues={inputValues} saveUserInfo={saveUserInfo} />
  ) : (
    <Signup
      inputValues={inputValues}
      saveUserInfo={saveUserInfo}
      setInputValues={setInputValues}
    />
  );
};

export default UserForm;
