import './portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="portfolioWrapper">
        <div className="portfolioCard">
          <img src="images/react.png" alt="react" />
          <div className="pCardInfo">
            <h1>Dochin Services</h1>
            <p>company's portfolio website using Javascript (React, Node.js) and MongoDB, based on Figma designs provided.</p>
            <a href="https://dochin-services.vercel.app/" className='pCardBtn'>Visit Project</a>
          </div>
        </div>
    

        <div className="portfolioCard">
          <img src="images/django.png" alt="react" />
          <div className="pCardInfo">
            <h1>Blog</h1>
            <p>Blog built on Django</p>
            <a href="https://github.com/rezarex/vado-blog" className='pCardBtn'>VIsit Project</a>
          </div>
        </div>



        <div className="portfolioCard">
          <img src="images/github.png" alt="react" />
          <div className="pCardInfo">
            <h1>Github Profile</h1>
            <p>Check out more projects on Github</p>
            <a href="https://github.com/rezarex" className='pCardBtn'>VIsit Project</a>
          </div>
        </div>
      

      </div>
    </div>
  )
}

export default Portfolio