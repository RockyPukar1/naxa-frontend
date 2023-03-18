import React from 'react';
import Services from './pages/services/Services';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header/Header';
import "./variables.scss";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
