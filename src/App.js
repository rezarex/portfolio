import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV'
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={ <Home/> } />
            <Route path='portfolio' element={ <Portfolio/> } />
            <Route path='about' element={ <About/> } />
            <Route path='cv' element={ <CV/> } />
            <Route path='contact' element={ <Contact/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
