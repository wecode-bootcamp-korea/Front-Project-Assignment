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

  const calculateQuantity = e => {
    e.target.name === 'plus'
      ? setQuantity(prev => prev + 1)
      : quantity > 1 && setQuantity(prev => prev - 1);
  };

  const addCart = () => {
    fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: params,
            quantity,
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
        {PRODUCT_LIST.map(({ id, name, content }) => (
          <span key={id} className={name}>
            {name === 'price' || name === 'rating'
              ? `${content}${product[name]}`
              : product[name]}
          </span>
        ))}
        <div className="handleBox">
          <span className="quantity"> 수량 : {quantity}개</span>
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
  { id: 4, name: 'price', content: '가격: $' },
  { id: 5, name: 'rating', content: '평점: ' },
];
