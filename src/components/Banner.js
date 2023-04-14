import React from 'react'
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <header className='header-banner'>
        <div className='container'>
            <div className='row'>
            <div className='col-6'>
                    <img src='images/profile.png' alt='' className='image'></img>
                </div>
                <div className='col-6'>
                    <div className='header-content'>
                        <div className='header-section'>
                            <h2>Hi, I'm</h2>
                            <h1>Marvin Okwaro</h1>
                            <h3>I am a <Typewriter  
                                            options={{
                                                strings: ['Data Scientist', 'Full Stack Developer', 'Technical Writer'],
                                                autoStart: true,
                                                loop: true,
                                              }}
                                            />
  </h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default Banner