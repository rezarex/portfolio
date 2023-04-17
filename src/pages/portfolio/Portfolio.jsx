import './portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="portfolioWrapper">
        <div className="portfolioCard">
          <img src="images/react.png" alt="react" />
          <div className="pCardInfo">
            <h1>First Project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut repellendus cum ipsam in tempore enim quas?.</p>
            <a href="#" className='pCardBtn'>VIsit Project</a>
          </div>
        </div>
    

        <div className="portfolioCard">
          <img src="images/nodejs.png" alt="react" />
          <div className="pCardInfo">
            <h1>Second Project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut repellendus cum ipsam in tempore enim quas?.</p>
            <a href="#" className='pCardBtn'>VIsit Project</a>
          </div>
        </div>



        <div className="portfolioCard">
          <img src="images/django.png" alt="react" />
          <div className="pCardInfo">
            <h1>Third Project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut repellendus cum ipsam in tempore enim quas?.</p>
            <a href="#" className='pCardBtn'>VIsit Project</a>
          </div>
        </div>
      

      </div>
    </div>
  )
}

export default Portfolio