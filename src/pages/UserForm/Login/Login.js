import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const userId = localStorage.getItem('id');
  const userPasswd = localStorage.getItem('passwd');
  const [inputData, setInputData] = useState({
    inputId: '',
    inputPasswd: '',
  });

  const { inputId, inputPasswd } = inputData;

  const handleInput = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const isCorrect = inputId === userId && inputPasswd === userPasswd;

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <form className="login" onChange={handleInput}>
      <span className="title">Login</span>
      <input
        className="userInput"
        name="inputId"
        type="text"
        placeholder="아이디"
      />
      <input
        className="userInput"
        name="inputPasswd"
        type="password"
        placeholder="비밀번호"
      />
      <button
        className="formBtn"
        disabled={isCorrect ? false : true}
        onClick={goToMain}
      >
        Login
      </button>
      <Link to="/signup" className="linkTranslationBtn">
        아직 회원이 아니신가요?
      </Link>
    </form>
  );
};

export default Login;
