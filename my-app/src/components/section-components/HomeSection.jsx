import BestSeller from './BestSeller';
import MainSlider from '../item-components/MainSlider';
import Header from '../Header';
import { useState } from 'react';

function HomeSection() {
  const [currency, setCurrency] = useState('gel');
  const [lang, setLang] = useState('en');

  const getCurrencyFromChild = (data) => {
    setCurrency(data);
    console.log(data);
  };
  const getLangFromChild = (data) => {
    setLang(data);
    console.log(data);
  };
  return (
    <>
      <Header
        activeTab='home'
        func1={getCurrencyFromChild}
        func2={getLangFromChild}
      />
      <MainSlider />
      <BestSeller currency={currency} lang={lang} />
      <footer></footer>
    </>
  );
}
export default HomeSection;
