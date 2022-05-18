import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import LoginPage from './LoginPage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search" caseSensitive={false} element={<SearchPage />} />

          <Route path='/' caseSensitive={false} element={<Home />} />

          <Route path='/LoginPage' caseSensitive={false} element={<LoginPage />} />

        </Routes>

        <Footer />
      </ Router>
      
    </div>

  );
}

export default App;


