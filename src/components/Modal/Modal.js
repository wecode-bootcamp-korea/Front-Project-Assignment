import React, { useState } from 'react';
import Login from '../../pages/components/Login/Login';
import Signup from '../../pages/components/Signup/Signup';
import './Modal.scss';

const Modal = ({ setIsOpenModal }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(true);

  return (
    <div
      className="modal"
      onClick={() => {
        setIsOpenModal(prev => !prev);
      }}
    >
      <div className="modalBox" onClick={e => e.stopPropagation()}>
        <Login isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
      </div>
    </div>
  );
};

export default Modal;
