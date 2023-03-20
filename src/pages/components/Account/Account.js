import React from 'react';

const Account = ({
  className,
  title,
  formButton,
  linkTranslationBtn,
  onClick,
  onClickTranslationBtn,
  onChange,
}) => {
  return (
    <form className={className}>
      <span className="title">{title}</span>
      <div className="inputBox">
        {title === 'Login' ? (
          <>
            <input className="userInput" placeholder="아이디" />
            <input className="userInput" placeholder="비밀번호" />
          </>
        ) : (
          <>
            <input
              className="userInput"
              name="name"
              placeholder="이름"
              onChange={onChange}
            />
            <input
              className="userInput"
              name="id"
              placeholder="아이디"
              onChange={onChange}
            />
            <input
              className="userInput"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
            />
            <input
              className="userInput"
              name="check"
              placeholder="비밀번호 확인"
              onChange={onChange}
            />
          </>
        )}
      </div>
      <button className="formButton" onClick={onClick}>
        {formButton}
      </button>
      <span className="linkTranslationBtn" onClick={onClickTranslationBtn}>
        {linkTranslationBtn}
      </span>
    </form>
  );
};

export default Account;
