import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState([]);

  const [checkedInputs, setCheckedInputs] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then(res => res.json())
      .then(data => {
        setCartList(data.products);
        setCheckList(cartList.map(item => item.id));
      });
  }, []);

  const isAllChecked = checked => {
    if (checked) {
      const idArray = [];
      cartList.forEach(el => idArray.push(el.id));
      setCheckedInputs(idArray);
    } else {
      setCheckedInputs([]);
    }
  };

  const handleCheckBox = (checked, id) => {
    if (checked) {
      setCheckedInputs(prev => [...prev, id]);
    } else {
      setCheckedInputs(checkedInputs.filter(el => el !== id));
    }
  };
  return (
    <div className="cart">
      <input
        type="checkbox"
        name="select=all"
        onChange={e => isAllChecked(e.target.checked)}
        checked={checkedInputs.length === cartList.length ? true : false}
      />
      전체선택
      <div className="line" />
      {cartList &&
        cartList.map(product => {
          return (
            <div className="productBox" key={product.id}>
              <input
                type="checkbox"
                name={`${product.id}`}
                checked={checkedInputs.includes(product.id) ? true : false}
                onChange={e => {
                  handleCheckBox(e.currentTarget.checked, product.id);
                }}
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
