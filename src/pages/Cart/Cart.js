import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then(res => res.json())
      .then(data => {
        setCartList(data.products);
      });
  }, []);

  if (!cartList) return null;

  return (
    <div className="cart">
      <input type="checkbox" checked={false} onClick="checked" />
      전체선택
      <div className="line" />
      {cartList.map(cartList => {
        return (
          <div className="productBox" key="">
            <input
              type="checkbox"
              onChange={setCheckList}
              onClick="checked"
              checked={false}
            />
            <span className="title">{cartList.title}</span>
            <span>{cartList.price}</span>
            <span>{cartList.quantity}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
