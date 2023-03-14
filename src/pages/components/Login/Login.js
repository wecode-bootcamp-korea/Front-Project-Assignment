import React from 'react';
import './Login.scss';

const Login = ({ setIsOpenLogin }) => {
  const handleLogin = e => {
    e.preventDefault();
    localStorage.setItem('token', '성공');
    setIsOpenLogin(prev => !prev);
  };

  return (
    <form className="login">
      <span className="title">Login</span>
      <div className="inputBox">
        <input className="userInput" placeholder="아이디" />
        <input className="userInput" placeholder="비밀번호" />
      </div>
      <button className="formButton" onClick={handleLogin}>
        Login
      </button>
      <span
        className="linkTranslationBtn"
        onClick={() => {
          setIsOpenLogin(prev => !prev);
        }}
      >
        아직 회원이 아니신가요?
      </span>
    </form>
  );
};

export default Login;
