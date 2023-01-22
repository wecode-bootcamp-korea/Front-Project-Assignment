import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ inputValues, saveUserInfo }) {
  const navigate = useNavigate();

  const loginSubmit = e => {
    inputValues.loginid === localStorage.loginid &&
    inputValues.loginpw === localStorage.loginpw
      ? navigate('/')
      : alert('ID 및 비밀번호를 확인해주세요.');
  };

  const validation =
    inputValues.loginid.length > 0 && inputValues.loginpw.length > 0;

  return (
    <div className="userForm">
      <form className="userContainer" onSubmit={loginSubmit}>
        <span className="title">Login</span>
        <input
          className="userInput"
          placeholder="아이디"
          name="loginid"
          value={inputValues.loginid}
          onChange={e => saveUserInfo(e)}
        />
        <input
          className="userInput"
          type="password"
          placeholder="비밀번호"
          name="loginpw"
          value={inputValues.loginpw}
          onChange={e => saveUserInfo(e)}
        />
        <button className="formButton" disabled={validation ? '' : 'disabled'}>
          Login
        </button>
        <Link to="/signup" className="linkTranslationBtn">
          아직 회원이 아니신가요?
        </Link>
      </form>
    </div>
  );
}
