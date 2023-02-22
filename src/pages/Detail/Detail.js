import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  const calculateQuantity = e => {
    const { name } = e.target;
    if (name === 'plus') {
      return setQuantity(prev => prev + 1);
    }
    if (name === 'minus') {
      return setQuantity(prev => prev - 1);
    }
  };

  const addCart = () => {
    fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: 1,
            quantity: quantity,
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="detail">
      <div className="imageContainer">
        <img src={product.images && product.images[0]} alt={product.title} />
      </div>
      <div className="productContent">
        <span className="title">{product.title}</span>
        <span className="category">{product.category}</span>
        <span className="description">{product.description}</span>
        <span className="price">가격 : {product.price}$</span>
        <span className="subInfo">평점 : {product.rating}</span>
        <div className="handleBox">
          <span className="quantity"> {quantity} 개</span>
          <button
            className="quantityBtn"
            name="plus"
            onClick={calculateQuantity}
          >
            +
          </button>
          <button
            className="quantityBtn"
            name="minus"
            onClick={calculateQuantity}
          >
            -
          </button>
        </div>
        <button className="addCartBtn" onClick={addCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default Detail;
