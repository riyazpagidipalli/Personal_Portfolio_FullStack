
import Header from '../Header'
import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Home = () =>{ 
  
  return (
  <>
    <Header />
   
    <div className="home-container">
      <div className="home-content">
        {/* <h1 className="home-heading">Clothes That Get YOU Noticed</h1> */}
        <h1 className="home-heading">FullStack Developer</h1>
        <img
          // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
           src="inspiredlogo.jpg"
          alt="dresses to be noticed"
         
          className="home-mobile-img"
        />
        <p className="home-description">
          Passion is part of the daily air and it does not quite help that it
          changes all the time.<br/><span className="Meaning">Meaning:</span> A lifestyle or mindset focused on following your passions and making them central to your life.<br/><span className="Meaning">Core Values:</span> Creativity, ambition, dedication, and authenticity.<br/><span className="Meaning">Purpose:</span> To inspire others to pursue what they love, turn hobbies into meaningful projects, and embrace a life full of energy and commitment.
        </p>
        <Link to="/AboutMe"><button type="button" className="shop-now-button">
          Interested
        </button></Link>
      </div>
      <img
        // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        src="inspiredlogo.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>

    
    
  </>
)}

export default Home
