import React from 'react';
import { Link } from 'react-router-dom';
import './UserForm.scss';

const UserForm = () => {
  return (
    <div className="userForm">
      <form className="userContainer">
        <span className="title">Login</span>
        <input className="userInput" placeholder="아이디" />
        <input className="userInput" placeholder="비밀번호" />
        <button className="formButton">Login</button>
        <Link to="/signup" className="linkTranslationBtn">
          아직 회원이 아니신가요?
        </Link>
      </form>
    </div>
  );
};

export default UserForm;
