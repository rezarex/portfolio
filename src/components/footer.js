import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter, FaLinkedin, FaGithub, FaDev} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
            <div className='footer-top-data d-flex gap-15 align-items-center'>
              <img src='images/newsletter.png' alt='newsletter'/>
              <h2 className='mb-0 text-white'>Subscribe to Newsletters</h2>
            </div>
            </div>
             <div className='col-7'>
               <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Subscribe with your email" aria-label="Subscribe with your email" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">Suscribe</span>
               </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h5 className='text-white mb-4'>Contact Us</h5>
              <div>
                <address className='text-white fs-6'><a className='text-white' href='tel: +254720370015'>tel: +254720370015</a>, <br/><a className='text-white' href='mailto: marvin.wekesa@gmail.com'>marvin.wekesa@gmail.com</a> <br/>Nairobi, Kenya</address>
              </div>
              <div className='social-icons d-flex align-items-center gap-30'>
                <a href=''><FaLinkedin className='text-white fs-5'/> </a>
                <a href=''><FaTwitter className='text-white fs-5'/> </a>
                <a href=''><FaDev className='text-white fs-5'/> </a>
                <a href=''><FaGithub className='text-white fs-5'/> </a>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='text-white mb-4'>Information</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Enquiries</Link>
                <Link className='text-white py-2 mb-1'>FAQs</Link>
                <Link className='text-white py-2 mb-1'>Terms and Conditions</Link>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='text-white mb-4'>Account</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Favourites</Link>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>Contact Us</Link>
                <Link className='text-white py-2 mb-1'>Contribute</Link>
              </div>
            </div>
            <div className='col-2'>
              <h5 className='text-white mb-4'>Quick Links</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Software Development</Link>
                <Link className='text-white py-2 mb-1'>Data Science</Link>
                <Link className='text-white py-2 mb-1'>AI</Link>
                <Link className='text-white py-2 mb-1'>Software Testing</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()} Powered by Vado.dev</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer