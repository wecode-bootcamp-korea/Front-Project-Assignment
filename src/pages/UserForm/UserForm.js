import React from 'react';
import { useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import './UserForm.scss';

const UserForm = () => {
  const location = useLocation().pathname;
  return location === '/signup' ? <Signup /> : <Login />;
};

export default UserForm;
