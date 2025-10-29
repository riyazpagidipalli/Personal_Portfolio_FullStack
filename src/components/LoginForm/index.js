import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'


class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError:false,
    errorMsg:""
  }
  onSubmitSuccess=jwtToken=>{
    Cookies.set('jwt_token',jwtToken,{
     expires:30
    })
    const {history} =this.props
    history.replace('/Home')
  }
  onSubmitFailure = errorMsg=>{
    // console.log(errorMsg)
    this.setState({
      showSubmitError:true,
      errorMsg,
    })

  }
submitForm = async event => {
    event.preventDefault()
    const{username, password} = this.state
    const userDetails = {username, password}
    // const url='https://apis.ccbp.in/login'
    const url="http://localhost:5000/login"
    const options = {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
      body: JSON.stringify(userDetails),
    }
//  try {
//     const response = await fetch(url, options)

//     if (!response.ok) {
//       const errorMsg = await response.text()
//       throw new Error(errorMsg)
//     }

//     const data = await response.json()
//     console.log("Login success:", data)
//     alert("Login successful! JWT: " + data.jwtToken)
//   } catch (error) {
//     console.error("Fetch error:", error)
//     alert("Failed to connect to server: " + error.message)
//   }
// }



    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    if(response.ok===true){
      this.onSubmitSuccess(data.jwtToken)
    }else{
      this.onSubmitFailure(data.Error)
    }
  }
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
          required
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
          required
        />
      </>
    )
  }

  render() {
    const {showSubmitError,errorMsg} =this.state
    const jwtToken =Cookies.get('jwt_token')
    if(jwtToken!==undefined){
      return <Redirect to="/Home"/>
    }
    return (
      <div className="login-form-container">
        <img
          // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          src="Riyazlogo.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          src="Riyazfavorite.jpeg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="Riyaz-logo">
          <img
            // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            src="Riyazlogo.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          /></div>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          
          {showSubmitError&&<p className='error-message'>*{errorMsg}</p>}
          <p>Dont have an account?👇</p><a href="/" >Signup</a>

        </form>
        
      </div>
    )
    
  }
}

export default LoginForm
