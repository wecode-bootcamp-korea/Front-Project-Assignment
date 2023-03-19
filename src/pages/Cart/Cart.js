import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => {
        setCartList(data.products);
      });
  }, []);

  const isAllChecked = '';

  return (
    <div className="cart">
      <input type="checkbox" checked={isAllChecked} />
      전체선택
      <div className="line" />
      {cartList.map(product => {
        return (
          <div className="productBox" key="">
            <input type="checkbox" checked="" />
            <span className="title">타이틀</span>
            <span>$</span>
            <span>개</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
