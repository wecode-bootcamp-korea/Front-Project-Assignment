import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const productId = params.id;
  const dialogRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId]);

  const calculateQuantity = () => {};

  const handleModal = e => {
    if (e.target.value === 'close') return;
    navigate('/cart');
  };

  const addCart = () => {
    fetch('', {
      method: '',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: '',
            quantity: '',
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          dialogRef.current.showModal();
        }
      });
  };

  return (
    <div className="detail">
      <div className="imageContainer">
        <img src={`${product.images && product.images[0]}`} alt="" />
      </div>
      <div className="productContent">
        <span className="title">{product.title}</span>
        <span className="category">{product.title}</span>
        <span className="description">{product.discountPercentage}</span>
        <span className="price">가격 : {product.price}$</span>
        <span className="subInfo">평점 : {product.rating}</span>
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
      <dialog ref={dialogRef} className="alertModal">
        <span>장바구니 페이지로 이동하겠습니까?</span>
        <form method="dialog" className="buttonWrap">
          <button value="confirm" onClick={handleModal} className="modalBtn">
            네
          </button>
          <button value="close" onClick={handleModal} className="modalBtn">
            아니오
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Detail;
