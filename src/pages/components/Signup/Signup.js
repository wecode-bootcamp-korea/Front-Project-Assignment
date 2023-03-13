import React, { useState } from 'react';
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

  return (
    <form className="signup">
      <span className="title">Signup</span>
      <div className="inputBox">
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
      </div>
      <button className="formButton">Signup</button>
      <span
        className="linkTranslationBtn"
        onClick={() => {
          setIsOpenLogin(prev => !prev);
        }}
      >
        이미 가입하셨나요?
      </span>
    </form>
  );
};

export default Signup;
