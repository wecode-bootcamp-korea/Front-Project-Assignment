import React, { useState } from 'react';
import Signup from '../Signup/Signup';
import './Login.scss';

const Login = ({ isOpenLogin, setIsOpenLogin }) => {
  const handleLogin = e => {
    e.preventDefault();
    localStorage.setItem('token', '성공');
    setIsOpenLogin(prev => !prev);
  };
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

  return (
    <form className="login">
      <span className="title">{isOpenLogin ? 'Login' : 'Signup'}</span>
      <div className="inputBox">
        {isOpenLogin ? (
          <>
            <input
              className="userInput"
              name="id"
              placeholder="아이디"
              onChange={handleInfo}
            />
            <input
              className="userInput"
              name="password"
              placeholder="비밀번호"
              onChange={handleInfo}
            />
          </>
        ) : (
          <>
            <input
              className="userInput"
              name="name"
              placeholder="이름"
              onChange={handleInfo}
            />
            <input
              className="userInput"
              name="id"
              placeholder="아이디"
              onChange={handleInfo}
            />
            <input
              className="userInput"
              name="password"
              placeholder="비밀번호"
              onChange={handleInfo}
            />
            <input
              className="userInput"
              name="check"
              placeholder="비밀번호 확인"
              onChange={handleInfo}
            />
          </>
        )}
      </div>
      <button className="formButton" onClick={handleLogin}>
        {isOpenLogin ? 'Login' : 'Signup'}
      </button>
      <span
        className="linkTranslationBtn"
        onClick={() => {
          setIsOpenLogin(prev => !prev);
        }}
      >
        {isOpenLogin ? '아직 회원이 아니신가요?' : '이미 가입하셨나요?'}
      </span>
    </form>
  );
};

export default Login;
