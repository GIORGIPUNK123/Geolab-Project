import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/style.css';
import './styles/header.css';
import './styles/product.css';
import './styles/registration.css';
import './styles/adminpanel.css';
import './styles/main-slider.css';
import './styles/section1.css';
import './styles/responsive.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
