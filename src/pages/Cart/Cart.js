import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then(res => res.json())
      .then(data => {
        setCartList(data.products);
      });
  }, []);

  const allChecked = () => {
    if (checkList.length === cartList.length) {
      setCheckList([]);
    } else {
      setCheckList(cartList.map(item => item.id));
    }
    setIsAllChecked(prev => !prev);
  };

  const handleCheckBox = id => {
    if (checkList.includes(id)) {
      setCheckList(checkList.filter(item => item !== id));
    } else {
      setCheckList(prev => [...prev, id]);
    }
  };

  return (
    <div className="cart">
      <input type="checkbox" onChange={allChecked} checked={isAllChecked} />
      전체선택
      <div className="line" />
      {cartList.map(({ id, price, quantity, title }) => {
        return (
          <div className="productBox" key={id}>
            <input
              type="checkbox"
              onChange={() => handleCheckBox(id)}
              checked={checkList.includes(id)}
            />
            <span className="title">{title}</span>
            <span>${price}</span>
            <span>{quantity}개</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
