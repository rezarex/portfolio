import './write.css'
import {BsCloudUpload} from 'react-icons/bs'

export default function Write() {
  return (
    <div className='write'>
        <img src="images/blogimg.webp" alt="" className="writeImg" />
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <BsCloudUpload className='writeIcon'/>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Write something...' className='writeInput writeText'></textarea>
        </div>
        <button type="submit" className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
