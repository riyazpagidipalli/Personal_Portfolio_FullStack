import { Link } from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

const Header = (props) => {
  const onClickLogout = () => {
    const { history } = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
   
    <nav className="nav-header">

      <div className="nav-content">
        <Link to="/Home" className="nav-link">
          <img
            className="website-logo"
            // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            // alt="website logo"
            src="Riyazlogo.png" alt="website logo" /></Link>

        <ul className="nav-menu">
          <li>
            <Link to="/Home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              {/* Products */}
              Project
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/AboutMe" className="nav-link">
              {/* Cart */}
              About Me
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn" onClick={onClickLogout}>
          Logout
        </button>
        <button type="button" className="logout-mobile-btn" onClick={onClickLogout}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
    
  )
}
export default withRouter(Header)