import React from 'react';
import searchIcon from '../../img/search-icon.svg';
function SearchBar() {
  return (
    <>
      <div className='search-bar'>
        <img className='search-img' src={searchIcon} alt='asgasg' />
        <input className='search-input' type='text' />
      </div>
    </>
  );
}
export default SearchBar;
