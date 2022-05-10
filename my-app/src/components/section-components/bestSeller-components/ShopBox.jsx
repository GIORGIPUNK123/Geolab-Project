import macImage1 from '../../../img/macbook1.png';
import iphone13Black1 from '../../../img/iphone13-black1.png';
import iphone13Blue1 from '../../../img/iphone13-blue1.png';
import iphone13Silver1 from '../../../img/iphone13-silver1.png';
import iphone13Gold1 from '../../../img/iphone13-gold1.png';
import iphone13Green1 from '../../../img/iphone13-green1.png';
import noImage from '../../../img/no-image.png';
// IMAGES
const images = {
  mac: macImage1,
  iphone13Black: iphone13Black1,
  iphone13Blue: iphone13Blue1,
  iphone13Silver: iphone13Silver1,
  iphone13Gold: iphone13Gold1,
  iphone13Green: iphone13Green1,
};

import starPic from '../../../img/star.svg';
import { Routes, Route, Link } from 'react-router-dom';
import '../../../styles/shopbox.css';
function ShopBox(props) {
  const RenderPrice = () => {
    if (props.currency == 'usd') {
      return (
        <div className='prices'>
          <div className='newPrice-text'>{props.newPrice}$</div>
          <div className='oldPrice-text'>{props.price}$</div>
        </div>
      );
    } else if (props.currency == 'gel') {
      console.log(props.gelPrice);
      return (
        <div className='prices'>
          <div className='newPrice-text'>{props.newGelPrice} ₾</div>
          <div className='oldPrice-text'>{props.gelPrice} ₾</div>
        </div>
      );
    }
  };
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
      className={'shop-box ' + props.type}
      style={{ display: props.display }}
    >
      <RenderImage />
      <span className='shop-box-name'>{props.name}</span>
      <div className='stars'>
        <img src={starPic} alt='star' />
        <img src={starPic} alt='star' />
        <img src={starPic} alt='star' />
        <img src={starPic} alt='star' />
        <img src={starPic} alt='star' />
      </div>
      <RenderPrice />
    </Link>
  );
}
export default ShopBox;
