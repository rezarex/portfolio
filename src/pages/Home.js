import React from 'react'
import Banner from '../components/Banner'
import Posts from '../components/posts/Posts'
import SidebarComponent from '../components/sidebarcomponent/SidebarComponent'
import './home.css'

import Register from './register/Register'


const Home = () => {
  return   <>
    <Banner/>
    <div className='home'>
    <Posts/>
    <SidebarComponent/>
    </div>
  </>
  
}

export default Home