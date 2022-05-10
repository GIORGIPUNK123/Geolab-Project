import { useEffect, useState } from 'react';
import LanguageChanger from './header-components/LanguageChanger';
import CurrencyChanger from './header-components/CurrencyChanger';
import profileImg from '../img/profile.svg';
import SearchBar from './header-components/SearchBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from '../../firebase-config';
import StoreSection from './section-components/StoreSection';
import HomeSection from './section-components/HomeSection';

function Header(props) {
  const getCurrencyFromChild = (data) => {
    console.log(data);
    props.func1(data);
  };
  const getLangFromChild = (data) => {
    console.log(data);
    props.func2(data);
  };
  // console.log(auth);
  // const logOut = async () => {
  //   await signOut(auth);
  // };

  const createLi = () => {
    if (props.activeTab == 'store') {
      return (
        <>
          <Link to='/' className='nav-li'>
            HOME
          </Link>
          <Link to='/store/mac/' className='nav-li active-li'>
            STORE
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to='/' className='nav-li active-li'>
            HOME
          </Link>
          <Link to='store/mac/' className='nav-li'>
            STORE
          </Link>
        </>
      );
    }
  };

  const [loggedIn, setLoggedIn] = useState(false);
  //
  const [currentTab, setCurrentTab] = useState('/');
  //

  return (
    <>
      <header>
        <div className='header-top-bar'>
          <div className='header-left'>
            <LanguageChanger func={getLangFromChild} />
            <CurrencyChanger func={getCurrencyFromChild} />
          </div>
          <div className='header-right'>
            <SearchBar />
            <span style={{ marginLeft: '40px' }}>
              PROFILE
              <img style={{ marginLeft: '10px' }} src={profileImg} alt='' />
            </span>
          </div>
        </div>
        <h1 className='main-text'>BOUNCER</h1>
        <nav className='header-nav'>
          <ul className='header-ul'>{createLi()}</ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
