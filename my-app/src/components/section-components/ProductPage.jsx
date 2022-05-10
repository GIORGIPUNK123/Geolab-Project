import { useParams, useResolvedPath } from 'react-router-dom';
import beats from '../../img/beats.png';

import macImage1 from '../../img/macbook1.png';
import macImage2 from '../../img/macbook2.png';
import HeaderForProduct from '../HeaderForProduct';
import StarPic from '../../img/star.svg';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Pictures
import iphone13Black1 from '../../img/iphone13-black1.png';
import iphone13Black2 from '../../img/iphone13-black2.png';
import iphone13Blue1 from '../../img/iphone13-blue1.png';
import iphone13Blue2 from '../../img/iphone13-blue2.png';
import iphone13Silver1 from '../../img/iphone13-silver1.png';
import iphone13Silver2 from '../../img/iphone13-silver2.png';
import iphone13Gold1 from '../../img/iphone13-gold1.png';
import iphone13Gold2 from '../../img/iphone13-gold2.png';
import iphone13Green1 from '../../img/iphone13-green1.png';
import iphone13Green2 from '../../img/iphone13-green2.png';

const ProductPage = () => {
  const [readyToRender, setReadyToRender] = useState(false);
  const { id } = useParams();

  const [items, setItems] = useState([]);

  const [filteredProduct, setFilteredProduct] = useState(
    items.find((item) => item.id == id)
  );

  useEffect(() => {
    fetch('https://geolab-project.herokuapp.com/items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredProduct(data.find((item) => item.id == id));
        console.log(data);
        setReadyToRender(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const QuantityDisplay = () => {
    const [count, setCount] = useState(1);
    return (
      <>
        <div className='quantity'>
          <button
            className='quantity-btn'
            onClick={() => {
              if (count != 1) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className='quantity-btn'
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </>
    );
  };

  const ColorsDisplay = () => {
    if (filteredProduct.type == 'iphone') {
      return (
        <div className='colors'>
          <div
            className='color-circle'
            style={{ backgroundColor: '#006CFF' }}
          ></div>
          <div
            className='color-circle'
            style={{ backgroundColor: '#FC3E39' }}
          ></div>
          <div
            className='color-circle'
            style={{ backgroundColor: '#171717' }}
          ></div>
          <div
            className='color-circle'
            style={{ backgroundColor: '#FFF600' }}
          ></div>
        </div>
      );
    } else return null;
  };

  const ImageDisplay = () => {
    if (filteredProduct.image == 'iphone13Black') {
      return (
        <>
          <Swiper rewind={true} navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Black1}
                alt='iphone black'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Black2}
                alt='iphone black'
              />
            </SwiperSlide>
          </Swiper>
        </>
      );
    } else if (filteredProduct.image == 'iphone13Blue') {
      return (
        <>
          <Swiper rewind={true} navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Blue1}
                alt='iphone blue'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Blue2}
                alt='iphone blue'
              />
            </SwiperSlide>
          </Swiper>
        </>
      );
    } else if (filteredProduct.image == 'iphone13Silver') {
      return (
        <>
          <Swiper rewind={true} navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Silver1}
                alt='iphone silver'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Silver2}
                alt='iphone silver'
              />
            </SwiperSlide>
          </Swiper>
        </>
      );
    } else if (filteredProduct.image == 'iphone13Gold') {
      return (
        <>
          <Swiper rewind={true} navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Gold1}
                alt='iphone gold'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Gold2}
                alt='iphone gold'
              />
            </SwiperSlide>
          </Swiper>
        </>
      );
    } else if (filteredProduct.image == 'iphone13Green') {
      return (
        <>
          <Swiper rewind={true} navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Green1}
                alt='iphone green'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='slider-img'
                src={iphone13Green2}
                alt='iphone green'
              />
            </SwiperSlide>
          </Swiper>
        </>
      );
    } else if (filteredProduct.image == 'mac') {
      return (
        <>
          <Swiper rewind={true} navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img className='slider-img' src={macImage1} alt='mac image' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='slider-img' src={macImage2} alt='mac image' />
            </SwiperSlide>
          </Swiper>
        </>
      );
    }
  };
  const Availability = () => {
    if (items[parseInt(id) - 1].availability) {
      return <h2>Availability: In Stock</h2>;
    } else return <h2>Availability: Not in stock</h2>;
  };
  if (readyToRender) {
    return (
      <>
        <HeaderForProduct />
        <section className='product-page-section'>
          <div className='main-product-part'>
            <div className='product-buy'>
              <div className='product-buy-left'>
                <div className='product-image-box'>
                  <ImageDisplay />
                </div>
              </div>
              <div className='product-buy-right'>
                <h1 className='product-name'>{filteredProduct.name}</h1>
                <div className='stars'>
                  <img src={StarPic} alt='star' />
                  <img src={StarPic} alt='star' />
                  <img src={StarPic} alt='star' />
                  <img src={StarPic} alt='star' />
                  <img src={StarPic} alt='star' />
                </div>
                <br />
                <div className='prices'>
                  <h2 className='product-price'>{filteredProduct.newPrice}$</h2>
                  <span className='old-price'>{filteredProduct.price}$</span>
                </div>
                <br />
                <br />
                <br />
                <Availability />
                <br />
                <ColorsDisplay />
                <br />
                <br />
                <QuantityDisplay />
              </div>
            </div>
            <div className='product-description'></div>
          </div>
          <div className='product-advertises'></div>
        </section>
      </>
    );
  } else return null;
};

export default ProductPage;
