import './singlepost.css'
//FiEdit
//FiDelete
import {FiEdit} from 'react-icons/fi'
import {MdDeleteOutline} from 'react-icons/md'

export default function SinglePost() {
  return (
    <div className='singlepost'>
      <div className="singlePostWrapper">
        <img src="images/blogimg.webp" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor
            <div className="singlePostEdit">
                <a href=''><FiEdit className='singlePostIcon editor fs-5'/></a>
                <a href=''><MdDeleteOutline className='singlePostIcon remover fs-5'/></a>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singleNameAuthor'>Author: <b>Marvin</b></span>
            <span className='singleNameDate'>15th April, 2023</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
            doloribus eos quis rem blanditiis magnam quisquam numquam sequi, 
            at quasi? Voluptatem non rem fuga est optio quos perspiciatis, labore illo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius quaerat ea ipsam
             vitae quod ipsum illum tempora. Necessitatibus similique mollitia
              corrupti nisi enim at, reprehenderit distinctio perferendis accusamus inventore?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
            doloribus eos quis rem blanditiis magnam quisquam numquam sequi, 
            at quasi? Voluptatem non rem fuga est optio quos perspiciatis, labore illo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius quaerat ea ipsam
             vitae quod ipsum illum tempora. Necessitatibus similique mollitia
              corrupti nisi enim at, reprehenderit distinctio perferendis accusamus inventore?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
            doloribus eos quis rem blanditiis magnam quisquam numquam sequi, 
            at quasi? Voluptatem non rem fuga est optio quos perspiciatis, labore illo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius quaerat ea ipsam
             vitae quod ipsum illum tempora. Necessitatibus similique mollitia
              corrupti nisi enim at, reprehenderit distinctio perferendis accusamus inventore?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
            doloribus eos quis rem blanditiis magnam quisquam numquam sequi, 
            at quasi? Voluptatem non rem fuga est optio quos perspiciatis, labore illo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius quaerat ea ipsam
             vitae quod ipsum illum tempora. Necessitatibus similique mollitia
              corrupti nisi enim at, reprehenderit distinctio perferendis accusamus inventore?
            </p>
      </div>
    </div>
  )
}
