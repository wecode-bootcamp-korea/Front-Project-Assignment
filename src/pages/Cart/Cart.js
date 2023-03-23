import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then(res => res.json())
      .then(data => {
        setCartList(data.products);
      });
  }, []);

  const handleAllCheck = checked => {
    if (checked) {
      let arr = [];
      cartList.map(item => arr.push(item.id));
      setCheckList(arr);
    } else {
      setCheckList([]);
    }
  };

  const handleChecked = e => {
    const id = Number(e.target.name);
    if (checkList.includes(id)) {
      setCheckList([...checkList.filter(arrId => arrId !== id)]);
    } else {
      setCheckList([...checkList, Number(id)]);
    }
  };

  return (
    <div className="cart">
      <input
        type="checkbox"
        checked={cartList.length === checkList.length ? 'checked' : ''}
        onClick={e => handleAllCheck(e.target.checked)}
      />
      전체선택
      <div className="line" />
      {cartList.map(product => {
        return (
          <div className="productBox" key={`${product.id}`}>
            <input
              type="checkbox"
              checked={checkList.includes(product.id) ? 'checked' : ''}
              name={`${product.id}`}
              onClick={handleChecked}
            />
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
