import React, { useState } from 'react';
import Account from '../Account/Account';
import './Signup.scss';

const Signup = ({ setIsOpenLogin }) => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    id: '',
    password: '',
    check: '',
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    setSignupInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    setIsOpenLogin(prev => !prev);
  };

  return (
    <Account
      className="signup"
      title="Signup"
      formButton="Signup"
      linkTranslationBtn="이미 가입하셨나요?"
      onChange={handleInfo}
      onClickTranslationBtn={handleLogin}
    />
  );
};

export default Signup;
