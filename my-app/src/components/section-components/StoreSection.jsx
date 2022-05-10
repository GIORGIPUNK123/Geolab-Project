import Header from '../Header';
import '../../styles/store.css';
import banner from '../../img/banner.png';
import DetailShopBox from './bestSeller-components/DetailShopBox';
import Slider from '@mui/material/Slider';
import { Routes, Route, Link, useParams, NavLink } from 'react-router-dom';

// const [color, setColor] = useState(0);

import { useEffect, useState } from 'react';
import { color } from '@mui/system';

function valuetext(value) {
  return `${value}°C`;
}

const StoreSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://geolab-project.herokuapp.com/items')
      .then((response) => response.json())
      .then((data) => setItems(data.filter((data) => data.type == productType)))
      .catch((err) => console.error(err));
  }, []);

  const [sortingValue, setSortingValue] = useState('name');

  const { productType } = useParams();
  const [value, setValue] = useState([100, 1000]);

  // useEffect(items, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RenderRangerNumbers = () => (
    <span className='ranger-numbers'>
      ${value[0]} - ${value[1]}
    </span>
  );

  return (
    <>
      <Header activeTab='store' />
      <section className='store-section'>
        <div className='store-filters'>
          <div className='store-filters-part1'>
            <h1 style={{ fontSize: '18px' }}>ACCESORIES</h1>
            <ul className='store-filters-ul'>
              <NavLink
                to={'/store/mac'}
                reloadDocument={true}
                id='port'
                className={({ isActive }) =>
                  isActive
                    ? 'store-filters-li active-filter-li'
                    : 'store-filters-li'
                }
              >
                Macbooks
              </NavLink>
              <NavLink
                to={'/store/iphone'}
                reloadDocument={true}
                id='iphones'
                className={({ isActive }) =>
                  isActive
                    ? 'store-filters-li active-filter-li'
                    : 'store-filters-li'
                }
              >
                {' '}
                Iphones
              </NavLink>
              <NavLink
                to={'/store/ipad'}
                reloadDocument={true}
                id='ipads'
                className={({ isActive }) =>
                  isActive
                    ? 'store-filters-li active-filter-li'
                    : 'store-filters-li'
                }
              >
                Ipads
              </NavLink>
              <NavLink
                to={'/store/case'}
                id='cases'
                className={({ isActive }) =>
                  isActive
                    ? 'store-filters-li active-filter-li'
                    : 'store-filters-li'
                }
              >
                Cases
              </NavLink>
              <NavLink
                to={'/store/airpod'}
                reloadDocument={true}
                id='airpods'
                className={({ isActive }) =>
                  isActive
                    ? 'store-filters-li active-filter-li'
                    : 'store-filters-li'
                }
              >
                Airpods
              </NavLink>

              <NavLink
                to={'/store/headphone'}
                reloadDocument={true}
                id='headphones'
                className={({ isActive }) =>
                  isActive
                    ? 'store-filters-li active-filter-li'
                    : 'store-filters-li'
                }
              >
                Headphones
              </NavLink>
            </ul>
          </div>
          <div className='store-filters-part2'>
            <h2>PRICES</h2>
            <div className='ranger-text'>
              <span>Ranger:</span> <RenderRangerNumbers />
            </div>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              getAriaValueText={valuetext}
              min={20}
              max={1200}
              sx={{ width: 260 }}
            />
          </div>
        </div>
        <div className='store-right'>
          <img src={banner} alt='banner' className='store-banner-img' />
          <div className='nav-filters'>
            <span>{items.length}</span>
            <div className='nav-sorting'>
              <span>Sort By </span>
              <select
                name='sorting'
                onChange={(event) => setSortingValue(event.target.value)}
              >
                <option value='name'>Name</option>
                <option value='highToLow'>Price to low</option>
                <option value='lowToHight'>Price to high</option>
              </select>
            </div>
          </div>
          <div className='store-main'>
            {items.map((item) => (
              <DetailShopBox
                type={item.type}
                name={item.name}
                price={item.price}
                newPrice={item.newPrice}
                key={item.id}
                id={item.id}
                image={item.image}
              ></DetailShopBox>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreSection;
