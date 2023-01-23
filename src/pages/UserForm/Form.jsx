import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Form({ data }) {
  const [user, setUser] = useState({
    name: '',
    id: '',
    passWord: '',
    passWordCheck: '',
  });
  const navigate = useNavigate();

  const handleUser = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const localInfoSave = () => {
    if (user.passWord !== user.passWordCheck) {
      alert('비밀번호가 틀렸습니다. 다시 입력해주세요!');
    }
    localStorage.setItem(user.id, user.passWord);
  };
  const localInfoUser = () => {
    localStorage.getItem(user.id);
    if (localStorage.getItem(user.id)) {
      navigate('/');
    } else {
      alert('로그인에 실패하였습니다. 다시 입력해주세요!');
      navigate('/login');
    }
  };
  return (
    <form className="userContainer">
      <span className="title">{data.title}</span>
      {data.title === '회원가입' && (
        <input
          className="userInput"
          placeholder="이름"
          name="name"
          onChange={handleUser}
        />
      )}
      <input
        className="userInput"
        placeholder="아이디"
        name="id"
        onChange={handleUser}
      />
      <input
        className="userInput"
        placeholder="비밀번호"
        name="passWord"
        type="password"
        onChange={handleUser}
      />
      {data.title === '회원가입' && (
        <input
          className="userInput"
          placeholder="비밀번호확인"
          type="password"
          name="passWordCheck"
          onChange={handleUser}
        />
      )}
      {data.title === '회원가입' ? (
        <button
          className="formButton"
          disabled={user.passWord === user.passWordCheck ? false : true}
          onClick={localInfoSave}
        >
          {data.title}
        </button>
      ) : (
        <button className="formButton" onClick={localInfoUser}>
          {data.title}
        </button>
      )}
      <Link to={data.url} className="linkTranslationBtn">
        {data.text}
      </Link>
    </form>
  );
}
