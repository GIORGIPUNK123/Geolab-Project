import React, { useEffect } from 'react';

function LanguageChanger(props) {
  const handleLangChange = (e) => {
    props.func(e.target.value);
  };

  return (
    <>
      <select name='language' id='languageChanger' onChange={handleLangChange}>
        <option value='en'>EN</option>
        <option value='ge'>GE</option>
      </select>
    </>
  );
}
export default LanguageChanger;
