import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import UserForm from './pages/UserForm/UserForm';
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<UserForm />} />
        <Route path="/signup" element={<UserForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
