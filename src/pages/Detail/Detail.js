import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams().id;
  const { title, category, description, price, rating, thumbnail } = product;

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [params]);

  const calculateQuantity = e => {};

  const addCart = () => {
    fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: 1,
            quantity: 1,
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
        <img src={thumbnail} alt={product.title} />
      </div>
      <div className="productContent">
        {/* {PRODUCT_LIST.map(({ id, name }) => {
          if (id <= 3) {
            <span className={name} key={id}>
              {name}
            </span>;
          }
          if (id === 4) {
            <span className={name} key={id}>
              가격 : ${name}
            </span>;
          }
          if (id === 5) {
            <span className={name} key={id}>
              평점 : {name}
            </span>;
          }
        })} */}
        <span className="title">{title}</span>
        <span className="category">{category}</span>
        <span className="description">{description}</span>
        <span className="price">가격 : ${price}</span>
        <span className="rating">평점 : {rating}</span>
        <div className="handleBox">
          <span className="quantity"> 수량 : 개</span>
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

const PRODUCT_LIST = [
  { id: 1, name: 'title' },
  { id: 2, name: 'category' },
  { id: 3, name: 'description' },
  { id: 4, name: 'price' },
  { id: 5, name: 'rating' },
];
