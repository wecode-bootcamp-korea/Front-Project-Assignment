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

  console.log(checkList);

  const isAllChecked = '';

  const allChecked = checked => {
    if (checked) {
      const idArray = [];
      cartList.forEach(el => idArray.push(el.id));
      setCheckList(idArray);
    } else {
      setCheckList([]);
    }
  };

  const handleCheckBox = (checked, id) => {
    if (checked) {
      setCheckList(prev => [...prev, id]);
    } else {
      setCheckList(checkList.filter(item => item !== id));
    }
  };

  return (
    <div className="cart">
      <input
        type="checkbox"
        onChange={e => allChecked(e.target.checked)}
        checked={checkList.length === cartList.length ? true : false}
      />
      전체선택
      <div className="line" />
      {cartList.map(product => {
        return (
          <div className="productBox" key={product.id}>
            <input
              type="checkbox"
              onChange={e => {
                handleCheckBox(e.target.checked, product.id);
              }}
              checked={checkList.includes(product.id) ? true : false}
            />
            <span className="title">{product.title}</span>
            <span>$ {product.price}</span>
            <span>{product.quantity}개</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
