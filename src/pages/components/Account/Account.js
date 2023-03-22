// import React from 'react';
// import { useState } from 'react';
// import './Account.scss';

// const Account = ({ setIsOpenLogin }) => {
//   const [accountDataName, setAccountDataName] = useState(LOGIN);
//   // const [isOpenLogin, setIsOpenLogin] = useState(true);
//   const [signupInfo, setSignupInfo] = useState({
//     id: '',
//     name: '',
//     password: '',
//     check: '',
//   });

//   const [userInfo, setUserInfo] = useState({
//     id: '',
//     name: '',
//     title: '',
//     button: '',
//     content: '',
//   });

//   const { id, name, title, button, content } = userInfo;

//   const handleInfo = e => {
//     const { name, value } = e.target;
//     setSignupInfo(prev => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = e => {
//     e.preventDefault();
//     localStorage.setItem('token', '성공');
//     setIsOpenLogin(prev => !prev);
//   };

//   return (
//     <form className="account">
//       {accountDataName[0].name === 'login' && (
//         <>
//           <span className="title">Login</span>
//           <div className="inputBox">
//             <input className="userInput" placeholder="아이디" />
//             <input className="userInput" placeholder="비밀번호" />
//           </div>
//           <button className="formButton" onClick={handleLogin}>
//             Login
//           </button>
//           <span
//             className="linkTranslationBtn"
//             onClick={() => {
//               setIsOpenLogin(prev => !prev);
//             }}
//           >
//             {content}
//           </span>
//         </>
//       )}
//       {accountDataName[0].name === 'signup' && (
//         <>
//           <span className="title">Signup</span>
//           <div className="inputBox">
//             <input
//               className="userInput"
//               name="name"
//               placeholder="이름"
//               onChange={handleInfo}
//             />
//             <input
//               className="userInput"
//               name="id"
//               placeholder="아이디"
//               onChange={handleInfo}
//             />
//             <input
//               className="userInput"
//               name="password"
//               placeholder="비밀번호"
//               onChange={handleInfo}
//             />
//             <input
//               className="userInput"
//               name="check"
//               placeholder="비밀번호 확인"
//               onChange={handleInfo}
//             />
//           </div>
//           <button className="formButton">Signup</button>
//           <span
//             className="linkTranslationBtn"
//             onClick={() => {
//               setIsOpenLogin(prev => !prev);
//             }}
//           >
//             이미 가입하셨나요?
//           </span>
//         </>
//       )}
//     </form>
//   );
// };

// export default Account;

// export const LOGIN = [
//   {
//     id: 1,
//     name: 'login',
//     title: 'Login',
//     content: '아직 회원이 아니신가요?',
//     button: 'Login',
//   },
// ];

// export const SIGNUP = [
//   {
//     id: 1,
//     name: 'signup',
//     title: 'Signup',
//     content: '이미 가입하셨나요?',
//     button: 'Signup',
//   },
// ];
