import SidebarComponent from '../../components/sidebarcomponent/SidebarComponent'
import './settings.css'
import {FaUserNinja} from 'react-icons/fa'


export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="images/profile.jpg" alt="" />
            <label htmlFor="fileInput">
              <FaUserNinja className='settingsPPIcon'/>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" name="" id="" placeholder='Wekessah' />
          <label>Email</label>
          <input type="email" name="" id="" placeholder='marvin.wekesa@gmail.com' />
          <label>Phone</label>
          <input type="tel" name="" id="" placeholder='0720370015' />
          <label>Password</label>
          <input type="password" name="" id=""/>
          <button type="submit" className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SidebarComponent/>
    </div>
  )
}
