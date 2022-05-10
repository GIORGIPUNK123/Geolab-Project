import { Component, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import HomeSection from './components/section-components/HomeSection';
import StoreSection from './components/section-components/StoreSection';
import ProductPage from './components/section-components/ProductPage';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';

const App = () => (
  <Routes>
    <Route path='/' element={<HomeSection />} />
    <Route path='/store/:productType/' element={<StoreSection />} />
    <Route path='/product/:id' element={<ProductPage />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/adminpanel' element={<AdminPanel />} />

    {/* <Route path='/signin' element={<SignIn />} />
  <Route path='/signup' element={<SignUp />} /> */}
  </Routes>
);

export default App;
