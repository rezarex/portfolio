import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/contact/Contact';
import CV from './pages/CV'
import Portfolio from './pages/portfolio/Portfolio';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Write from './components/write/Write';
import Single from './components/single/Single';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={ <Home/> } />
            <Route path='portfolio' element={ <Portfolio/> } />
            <Route path='about' element={ <About/> } />
            <Route path='login' element={ <Login/> } />
            <Route path='register' element={ <Register/> } />
            <Route path='settings' element={ <Settings/> } />
            <Route path='write' element={ <Write/> } />
            <Route path='post/:postId' element={ <Single/> } />
            <Route path='cv' element={ <CV/> } />
            <Route path='contact' element={ <Contact/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
