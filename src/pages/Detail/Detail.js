import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  const { id, title, category, price, rating, description, stock } = product;

  const params = useParams();
  const dialogRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setProduct(data);
        setImageSrc(`${data.images[0]}`);
        console.log(data.images);
      });
  }, []);

  if (loading) return <>Loading.... </>;

  const calculateQuantity = e => {
    if (e.target.name === 'plus') {
      if (quantity === stock) return alert('최대 수량입니다');
      setQuantity(quantity + 1);
    } else if (e.target.name === 'minus') {
      quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
    } else alert('calculate failed');
  };

  const handleModal = e => {
    if (e.target.value === 'close') return;
    navigate('/cart');
  };

  const addCart = () => {
    fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id,
            quantity,
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          dialogRef.current.showModal();
        }
        console.log(data);
      });
  };

  return (
    <div className="detail">
      <div className="imageContainer">
        <img src={`${imageSrc}`} alt="images" />
      </div>
      <div className="productContent">
        <span className="title">{title}</span>
        <span className="category">{category}</span>
        <span className="description">{description}</span>
        <span className="price">가격 : {price}$</span>
        <span className="subInfo">평점 : {rating}</span>
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
