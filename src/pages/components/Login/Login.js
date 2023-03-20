import React from 'react';
import Account from '../Account/Account';
import './Login.scss';

const Login = ({ setIsOpenLogin }) => {
  const handleLogin = e => {
    e.preventDefault();
    localStorage.setItem('token', '성공');
    setIsOpenLogin(prev => !prev);
  };

  return (
    <Account
      className="login"
      title="Login"
      formButton="Login"
      linkTranslationBtn="아직 회원이 아니신가요?"
      onClick={handleLogin}
      onClickTranslationBtn={handleLogin}
    />
  );
};

export default Login;
