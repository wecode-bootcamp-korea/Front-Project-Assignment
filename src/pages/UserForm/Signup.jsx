import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup({ inputValues, setInputValues, saveUserInfo }) {
  const navigate = useNavigate();
  const signupSubmit = e => {
    localStorage.setItem('loginid', inputValues.signupid);
    localStorage.setItem('loginpw', inputValues.signuppw);
    navigate('/login');
  };

  const pwconfirmation = () => {
    inputValues.signuppw !== inputValues.signuppwconfirm
      ? setInputValues({
          ...inputValues,
          pwconfirmationvalid: false,
          pwconfirmationalert: '비밀번호 확인이 일치하지 않습니다.',
        })
      : setInputValues({
          ...inputValues,
          pwconfirmationvalid: true,
          pwconfirmationalert: '비밀번호 확인이 일치합니다.',
        });
  };

  return (
    <div className="userForm">
      <form className="userContainer" onSubmit={signupSubmit}>
        <span className="title">Signup</span>
        <input
          className="userInput"
          placeholder="아이디"
          name="signupid"
          value={inputValues.signupid}
          onChange={e => saveUserInfo(e)}
        />
        <input
          className="userInput"
          type="password"
          placeholder="비밀번호"
          name="signuppw"
          value={inputValues.signuppw}
          onChange={e => saveUserInfo(e)}
        />
        <input
          className="userInput"
          type="password"
          placeholder="비밀번호 확인"
          name="signuppwconfirm"
          value={inputValues.signuppwconfirm}
          onChange={e => saveUserInfo(e)}
          onKeyUp={pwconfirmation}
        />
        <input
          className="userInput"
          placeholder="이름"
          name="signupname"
          value={inputValues.signupname}
          onChange={e => saveUserInfo(e)}
        />
        <p className="invalidpwconfirm">{inputValues.pwconfirmationalert}</p>
        <button
          className="formButton"
          disabled={
            inputValues.pwconfirmationvalid && inputValues.signupname
              ? ''
              : 'disabled'
          }
        >
          Signup
        </button>
        <Link to="/login" className="linkTranslationBtn">
          이미 가입하셨나요?
        </Link>
      </form>
    </div>
  );
}
