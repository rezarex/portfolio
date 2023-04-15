import './single.css'
import SidebarComponent from'../sidebarcomponent/SidebarComponent'
import SinglePost from '../singlepost/SinglePost'


export default function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <SidebarComponent/>
    </div>
  )
}
