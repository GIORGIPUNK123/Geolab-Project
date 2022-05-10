import React from 'react';
import cartImg from '../../img/cart.svg';
let itemCount = 0;
let price = '0.00';
function HeaderCount() {
  return (
    <>
      <div className='header-cart'>
        <a href='#'>
          <img className='profile-img' src={cartImg} alt='asga' />
          <span>{itemCount} Items </span>
          <span style={{ color: 'rgba(36, 36, 36, 0.5)', marginLeft: '10px' }}>
            ${price}
          </span>
        </a>
      </div>
    </>
  );
}
export default HeaderCount;
