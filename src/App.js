import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Api from './component/Body component/Api';
import Notfound from './component/Body component/Notfound';
import Home from './component/Body component/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Api />} />

      <Route path='/*' element={<Notfound />} />
    </Routes>
  );
}

export default App;
