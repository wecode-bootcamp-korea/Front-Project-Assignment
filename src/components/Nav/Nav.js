import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../pages/components/Login/Login';
import Signup from '../../pages/components/Signup/Signup';
import Modal from '../Modal/Modal';
import './Nav.scss';

const Nav = () => {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const dialog = useRef();

  const searchProdut = e => {
    setSearchText(e.target.value);
  };

  const handleModal = () => {
    // dialog.current.showModal();
    setIsOpenModal(prev => !prev);
  };

  const goToDetail = id => {};

  return (
    <nav className="nav">
      <div className="contentContainer">
        <Link className="logo" to="/">
          Wecode
        </Link>
        <div className="search">
          <input
            className="searchInput"
            placeholder="검색"
            value={searchText}
            onChange={searchProdut}
          />
          {searchText.length > 0 && (
            <div className="searchBox">
              {searchList.map(list => {
                return (
                  <span
                    key={list.id}
                    className="result"
                    onClick={() => goToDetail(list.id)}
                  >
                    {list.title}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <div className="loginBtn" onClick={handleModal}>
          로그인
        </div>
        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      </div>
    </nav>
  );
};

export default Nav;
