import React from 'react';
import './UserForm.scss';
import Form from './Form';
import { useLocation } from 'react-router-dom';

const UserForm = () => {
  const location = useLocation();
  const LOGIN_DATA = {
    title: '로그인',
    text: '계정이 없으신가요?',
    url: '/signup',
  };
  const SINGNUP_DATA = {
    title: '회원가입',
    text: '이미 가입하셨나요?',
    url: '/login',
  };
  return (
    <div className="userForm">
      <Form
        data={
          location.pathname === SINGNUP_DATA.url ? LOGIN_DATA : SINGNUP_DATA
        }
      />
    </div>
  );
};

export default UserForm;
