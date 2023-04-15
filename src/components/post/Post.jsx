import'./post.css'

export default function Post() {
  return (
    <div className='post'>
      <img
      className='postImg'
      src='images/blogimg.webp'
      alt=''
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Python</span>
            <span className="postCat">Data Science</span>
        </div>
        <span className="postTitle">Lorem ipsum</span>
       <p className="postDesc">Lorem ipsum, dolor sit amet consectetur</p>
       <p className="postBody">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis reprehenderit. Explicabo sed odio laborum eum ipsa omnis quos impedit at a, iusto officia dicta quaerat sunt sit tenetur adipisci?
       </p>
        <span className="postDate">20 mins ago</span>
      </div>
    </div>
  )
}
