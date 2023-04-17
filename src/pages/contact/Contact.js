import React from 'react'
import './contact.css'
import {BsCloudUpload} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='write'>
   
  <form className='writeForm'>
    <div className="writeFormGroup">
          
        <input type="text" placeholder='Subject' className='writeInput' autoFocus={true}/>
        <input type="text" placeholder='Full Name' className='writeInput'/>
        <input type="email" placeholder='email@email.com' className='writeInput' />
    </div>
    <div className="writeFormGroup">
        <textarea placeholder='Write something...' className='writeInput writeText'></textarea>
    </div>
    <button type="submit" className='writeSubmit'>Send</button>
  </form>
</div>
  )
}

export default Contact
