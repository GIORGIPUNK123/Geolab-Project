import macImage1 from '../../../img/macbook1.png';
import starPic from '../../../img/star.svg';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../../styles/shopbox.css';

// Images
import iphone13Black1 from '../../../img/iphone13-black1.png';
import iphone13Blue1 from '../../../img/iphone13-blue1.png';
import iphone13Silver1 from '../../../img/iphone13-silver1.png';
import iphone13Gold1 from '../../../img/iphone13-gold1.png';
import iphone13Green1 from '../../../img/iphone13-green1.png';
import noImage from '../../../img/no-image.png';

const images = {
  mac: macImage1,
  iphone13Black: iphone13Black1,
  iphone13Blue: iphone13Blue1,
  iphone13Silver: iphone13Silver1,
  iphone13Gold: iphone13Gold1,
  iphone13Green: iphone13Green1,
};

function DetailShopBox(props) {
  const RenderImage = () => (
    <img
      className='shop-box-image'
      src={images[props.image]}
      alt={props.image}
    />
  );

  return (
    <Link
      to={'/product/' + props.id}
      id={props.id}
      className={'detail-shop-box ' + props.type}
    >
      <RenderImage />
      <div className='right-box'>
        <span className='detail-shop-box-name'>{props.name}</span>
        <div className='stars'>
          <img src={starPic} alt='star' />
          <img src={starPic} alt='star' />
          <img src={starPic} alt='star' />
          <img src={starPic} alt='star' />
          <img src={starPic} alt='star' />
        </div>
        <div className='detail-prices'>
          <h3></h3>
          <span className='detail-newPrice-text'>{props.newPrice}$</span>
          <span className='detail-oldPrice-text'>{props.price}$</span>
        </div>
        <div className='detail-shopbox-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          similique molestias placeat aperiam dolore! Aut sapiente, aspernatur
          sit, veritatis eum illo quasi laboriosam corporis deleniti odit,
          doloremque quo voluptatum rerum.
        </div>
      </div>
    </Link>
  );
}
export default DetailShopBox;
