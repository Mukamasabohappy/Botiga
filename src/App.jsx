import React from "react";
import Navbar from "./component/Navbar"; 
import Home from './component/Home';
import Footer from './component/Footer';
import Shop from './component/Shop';
import StoreList from "./component/Store";
import Contact from "./component/Contact";
import Blog from './component/Blog';
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router> {/* Use Router here */}
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home/>}/> {/* Removed Layout (if not defined) */}
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/vendor' element={<StoreList/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Blog'    element={<Blog/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
