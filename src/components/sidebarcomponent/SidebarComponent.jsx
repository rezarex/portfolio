import './sidebarcomponents.css'

export default function SidebarComponent() {
  return (
    <div className='sidebarcomponent'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Popular Blogs</span>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>Blog Title 1</li>
            <li className='sidebarListItem'>Blog Title 2</li>
            <li className='sidebarListItem'>Blog Title 3</li>
            <li className='sidebarListItem'>Blog Title 4</li>
            <li className='sidebarListItem'>Blog Title 5</li>
        </ul>
      </div>
    </div>
  )
}
