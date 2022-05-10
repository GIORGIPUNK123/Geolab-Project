import { useEffect, useState } from 'react';
import ShopBox from './bestSeller-components/ShopBox.jsx';
import { Routes, Route, Link } from 'react-router-dom';

const BestSeller = (props) => {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([]);

  const [currentTab, setCurrentTab] = useState('all');

  const filtering = (whichType) => {
    if (whichType != 'all') {
      setNewItems(items.filter((item) => item.type == whichType));
      console.log(items);
    } else {
      setNewItems(items);
      console.log(items);
    }
  };

  useEffect(() => {
    fetch('https://geolab-project.herokuapp.com/items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setNewItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [gapVar, setGapVar] = useState(8);

  function CreateLi(name, activeTab, click) {
    if (currentTab == activeTab) {
      return (
        <li className='best-seller-li active-li' onClick={click}>
          {name}
        </li>
      );
    } else {
      return (
        <li className='best-seller-li' onClick={click}>
          {name}
        </li>
      );
    }
  }
  return (
    <>
      <div className='best-seller-section'>
        <div className='best-seller'>
          <h2 className='best-seller-text'>BEST SELLER</h2>
          <nav className='best-seller-nav'>
            <ul className='best-seller-ul'>
              {CreateLi('All', 'all', () => {
                setCurrentTab('all');
                setGapVar(8);
                console.log(currentTab);

                filtering('all');
              })}
              {CreateLi('Mac', 'mac', () => {
                setCurrentTab('mac');
                setGapVar(8);
                console.log(currentTab);
                filtering('mac');
              })}
              {CreateLi('Iphone', 'iphone', () => {
                setCurrentTab('iphone');
                setGapVar(8);
                console.log(currentTab);
                filtering('iphone');
              })}
              {CreateLi('Ipad', 'ipad', () => {
                setCurrentTab('ipad');
                setGapVar(8);
                console.log(currentTab);
              })}
              {CreateLi('Airpods', 'airpods', () => {
                setCurrentTab('Airpods');
                setGapVar(8);
                console.log(currentTab);
              })}
            </ul>
          </nav>
          <div className='best-seller-shop'>
            {newItems.map((item) => (
              <ShopBox
                currency={props.currency}
                lang={props.lang}
                currentTab={currentTab}
                type={item.type}
                name={item.name}
                price={item.price}
                newPrice={item.newPrice}
                gelPrice={item.gelPrice}
                newGelPrice={item.newGelPrice}
                key={item.id}
                id={item.id}
                image={item.image}
              ></ShopBox>
            ))}
          </div>
          <span
            onClick={() => {
              if (currentTab == 'all') {
                setGapVar(gapVar + 8);
                console.log(gapVar);
              }
              if (currentTab == 'mac') {
                setGapVar(gapVar + 8);
                console.log(gapVar);
              }
              if (currentTab == 'iphone') {
                setGapVar(gapVar + 8);
                console.log(gapVar);
              }
              if (currentTab == 'ipad') {
                setGapVar(gapVar + 8);
                console.log(gapVar);
              }
              if (currentTab == 'ipod') {
                setGapVar(gapVar + 8);
                console.log(gapVar);
              }
            }}
            className='shop-load-more'
          >
            LOAD MORE
          </span>
        </div>
      </div>
    </>
  );
};
export default BestSeller;
