import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
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
      {cartList &&
        cartList.map(product => {
          return (
            <div className="productBox" key="">
              <input type="checkbox" checked="" />
              <span className="title">{product.title}</span>
              <span>{product.price}$</span>
              <span>{product.quantity}개</span>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
