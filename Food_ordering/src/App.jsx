import React from 'react'
  // import Container from 'react-bootstrap/Container';
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './nav/home/Home'
import Order from './nav/order/Order'
import Categories from './nav/categories/Categories'
import Foods from './nav/Food/Foods'
// import Login from './nav/login/Login'
function App() {
  return (
    <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <HashRouter>
      <Routes>
        <Route path='/' element = { <Home/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Order' element={<Order/>}/>
        {/* <Route path='/Foods' element={<Foods/>}/> */}
        {/* <Route path='/Contact' element={<Contact/>}/> */}
        {/* <Route path='/Login' element={<Login/>}/> */}
      </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
