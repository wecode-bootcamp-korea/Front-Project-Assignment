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
  }, [cartList]);

  const isAllChecked = cartList.length === checkList.length && checkList !== 0;

  const allChecked = checked => {
    if (checked) {
      const checkItems = [];
      cartList.map(cart => checkItems.push(cart.id));
      setCheckList(checkItems);
    } else {
      setCheckList([]);
    }
  };

  const handleCheckBox = (checked, id) => {
    if (checked) {
      setCheckList(prev => [...prev, id]);
      console.log('check');
    } else {
      setCheckList(checkList.filter(check => check !== id));
    }
  };

  return (
    <div className="cart">
      <input
        type="checkbox"
        checked={isAllChecked}
        onChange={e => allChecked(e.currentTarget.checked)}
      />
      전체선택
      <div className="line" />
      {cartList.map(product => {
        return (
          <div className="productBox" key={product.id}>
            <input
              type="checkbox"
              onChange={e => handleCheckBox(e.target.checked, product.id)}
              checked={checkList.includes(product.id)}
            />
            <span className="title">{product.title}</span>
            <span>${product.price}</span>
            <span>{product.quantity}개</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
