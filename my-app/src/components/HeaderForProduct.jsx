import { useEffect, useState } from 'react';
import LanguageChanger from './header-components/LanguageChanger';
import CurrencyChanger from './header-components/CurrencyChanger';
import profileImg from '../img/profile.svg';
import SearchBar from './header-components/SearchBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HeaderForProduct(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  //
  const [currentTab, setCurrentTab] = useState('/');
  //

  return (
    <>
      <header>
        <div className='header-top-bar'>
          <div className='header-left'>
            <LanguageChanger />
            <CurrencyChanger />
          </div>
          <div className='header-right'>
            <SearchBar />
            <span style={{ marginLeft: '40px' }}>
              PROFILE{' '}
              <img style={{ marginLeft: '10px' }} src={profileImg} alt='' />
            </span>
          </div>
        </div>
        <h1 className='main-text'>BOUNCER</h1>
        <nav className='header-nav'>
          <ul className='header-ul'>
            <Link to='/' className='nav-li'>
              HOME
            </Link>
            <Link to='../../store/mac/' className='nav-li active-li'>
              STORE
            </Link>
            <Link to='../../about' className='nav-li'>
              ABOUT
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default HeaderForProduct;
