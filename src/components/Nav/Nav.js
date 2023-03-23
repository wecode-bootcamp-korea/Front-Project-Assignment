import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './Nav.scss';

const Nav = () => {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const searchProduct = e => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchText}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSearchList(
          data.products.filter(products =>
            products.title.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      });
  }, [searchText]); // searchText state 가 변경될 때만 렌더링하겠다

  const handleModal = () => {
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
            onChange={searchProduct}
          />
          {searchText.length > 0 && searchList.length > 0 && (
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
        <div className="menuBox">
          <div className="loginBtn" onClick={handleModal}>
            로그인
          </div>
          <Link className="listPageBtn" to="/products">
            상품 리스트
          </Link>
        </div>
        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      </div>
    </nav>
  );
};

export default Nav;
