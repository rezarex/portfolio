import React from 'react'
import Banner from '../components/Banner'
import Posts from '../components/posts/Posts'
import SidebarComponent from '../components/sidebarcomponent/SidebarComponent'
import './home.css'

import Register from './register/Register'
import Portfolio from './portfolio/Portfolio'


const Home = () => {
  return   <>
    <Banner/>
    <Portfolio/>
  </>
  
}

export default Home