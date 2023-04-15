import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'

const Header = () => {
  return <>
    <header className='header-top-strip py-1'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-6'>
          <p className='text-white mb-0'>Welcome to my blog and portfolio!</p>
        </div>
        <div className='col-6'>
          <p className='text-end text-white mb-0'>Phone: <a className='text-white' href='tel: +254 720370015'>+254 720370015</a></p>
        </div>
        </div>
      </div>
    </header>
    {/* <header className='header-upper py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-2'>
            <h1>
              <Link className='text-white'>Vado.dev</Link>
            </h1>
          </div>
          <div className='col-5'>
          <div className="input-group">
            <input type="text" className="form-control py-2" placeholder="Search blog..." aria-label="Search blog..." aria-describedby="basic-addon2"/>
            <span className="input-group-text p-3" id="basic-addon2"><FcSearch/></span>
          </div>
          </div>
          <div className='col-4'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/heart.svg' alt='Favourites'/>
                  <p className='mb-0'>Favourites</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/notification.svg' alt='Notifications'/>
                  <p className='mb-0'>Notifications</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/user.svg' alt='Login/ Register'/>
                  <p className='mb-0'>Login/ <br/> Register</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header> */}
    <header className='header-bottom sticky-top py-3'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-14'>
        <div className='menu-bottom d-flex align-items-center gap-30'>

        <div className='col-2'>
            <h3>
              <Link className='text-white'>Vado.dev</Link>
            </h3>
          </div>
        
        


       <div className='col-3'>
          <div className="input-group">
            <input type="text" className="form-control py-2" placeholder="Search blog..." aria-label="Search blog..." aria-describedby="basic-addon2"/>
            <span className="input-group-text p-3" id="basic-addon2"><FcSearch/></span>
          </div>
          </div>


          <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {/* <img src='images/menu.svg'/> */}
                  <span className='md-5 d-inline-block'>Blog Categories</span>
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                </ul>
              </div>
          
          <div className='menu-links'>
            <div className='d-flex align-items-center gap-15'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/portfolio'>Portfolio</NavLink>
              {/* <NavLink to='/cv'>Resume</NavLink> */}
              <NavLink to='/contact'>Contact Us</NavLink>
            </div>
          </div>

          <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/user.svg' alt='Login/ Register'/>
                  <p className='mb-0'>Login <br/> Register</p>
                </Link>
              </div>
        </div>
        
      </div>
        </div>
      </div>
    </header>
  </>
}

export default Header