import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../UserForm.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userValue, setUserValue] = useState({
    id: '',
    pw: '',
  });

  const isIdValid = userValue.id.includes('@');
  const isAllValid = isIdValid && userValue.pw !== '';

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserValue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitInput = e => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('user'));
    const id = data.id;
    const pw = data.pw;
    const isDataMatch = userValue.id === id && userValue.pw === pw;
    if (isDataMatch) {
      alert('로그인 완료!!');
      navigate('/');
    } else {
      alert('실패ㅋ');
    }
  };

  return (
    <div className="userForm">
      <form className="userContainer" onSubmit={handleSubmitInput}>
        <span className="title">Login</span>
        {INPUT_PLACEHOLDER.map(({ id, name, type }) => (
          <div key={id}>
            <input
              className="userInput"
              placeholder={name}
              name={id}
              onChange={handleInputChange}
              type={type}
            />
            {id === 'id' && (
              <p className="checkValid">
                {!isIdValid && '이메일을 입력해주세요'}
              </p>
            )}
          </div>
        ))}
        <button
          className={isAllValid ? 'formButton' : 'formButton disabled'}
          disabled={!isAllValid}
        >
          Login
        </button>
        <Link to="/signup" className="linkTranslationBtn">
          아직 회원이 아니신가요?
        </Link>
      </form>
    </div>
  );
};

export default Login;

const INPUT_PLACEHOLDER = [
  { id: 'id', name: '아이디' },
  { id: 'pw', name: '비밀번호', type: 'password' },
];
