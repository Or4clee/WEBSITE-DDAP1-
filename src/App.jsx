import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import ContentPage from './ContentPage/ContentPage';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element= {<LandingPage/>} />
          <Route path='/content' element= {<ContentPage/>} />
        </Routes>
      </Router>
  )
}

export default App;
