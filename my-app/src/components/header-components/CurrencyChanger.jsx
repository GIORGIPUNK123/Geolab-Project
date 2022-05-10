import React, { useState } from 'react';
function CurrencyChanger(props) {
  const handleLangChange = (e) => {
    props.func(e.target.value);
  };
  return (
    <>
      <select name='currency' id='CurrencyChanger' onChange={handleLangChange}>
        <option value='gel'>GEL</option>
        <option value='usd'>USD</option>
      </select>
    </>
  );
}
export default CurrencyChanger;
