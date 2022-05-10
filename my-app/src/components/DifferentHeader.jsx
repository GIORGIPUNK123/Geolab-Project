import LanguageChanger from './header-components/LanguageChanger';
import CurrencyChanger from './header-components/CurrencyChanger';
import profileImg from '../img/profile.svg';
import SearchBar from './header-components/SearchBar';

const DifferentHeader = () => (
  <>
    <header>
      <div className='header-top-bar'>
        <div className='header-left'>
          <LanguageChanger />
          <CurrencyChanger />
        </div>
        <div className='header-right'>
          <SearchBar />
          <button
            onClick={() => {
              logOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  </>
);
export default DifferentHeader;
