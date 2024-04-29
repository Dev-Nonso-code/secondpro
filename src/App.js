import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Api from './component/Body component/Api';
import Notfound from './component/Body component/Notfound';
import Home from './component/Body component/Home';
import Smart from './component/Body component/Smart';
import Smartphone from './component/Body component/Smartphone';
import Oppo from './component/Body component/Oppo';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Api />} />
      <Route path="/dashboard/smart/:id" element={<Smart />} />
      <Route path='/category/all/ :categoryName' element={<Oppo />} />
      <Route path="/dashboard/smartphone/" element={<Smartphone />} />
      {/* <Route path='/smart' element={<Smart />} /> */}

      <Route path='/*' element={<Notfound />} />
    </Routes>
  );
}

export default App;
