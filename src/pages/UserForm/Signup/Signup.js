import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = ({ userData, handleInput }) => {
  const { id, passwd, passwdCheck, name } = userData;
  const navigate = useNavigate();

  const isSame = passwd === passwdCheck;

  const isValid = id !== '' && isSame === true && name !== '';

  const onClickSignup = () => {
    localStorage.setItem('id', id);
    localStorage.setItem('passwd', passwd);
    navigate('/login');
  };

  return (
    <form className="signup" onChange={handleInput}>
      <span className="title">Signup</span>
      <input
        className="userInput"
        name="id"
        type="text"
        placeholder="아이디"
        value={id}
      />
      <input
        className="userInput"
        name="passwd"
        type="password"
        placeholder="비밀번호"
        value={passwd}
      />
      <input
        className="userInput"
        name="passwdCheck"
        type="password"
        placeholder="비밀번호 확인"
        value={passwdCheck}
        // onChange={onChangePasswd}
      />
      {passwdCheck !== '' && !isSame && (
        <p className="passwdCheck">비밀번호가 다릅니다.</p>
      )}
      <input
        className="userInput"
        name="name"
        type="text"
        placeholder="이름"
        value={name}
      />
      <button
        className="formBtn"
        disabled={isValid ? false : true}
        onClick={onClickSignup}
      >
        Signup
      </button>
      <Link to="/login" className="linkTranslationBtn">
        이미 가입하셨나요?
      </Link>
    </form>
  );
};

export default Signup;
