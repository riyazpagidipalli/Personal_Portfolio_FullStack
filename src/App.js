
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/protectedRoute'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import NotFound from './components/NotFound'

import './App.css'
import AllProductsSection from './components/Products'
import Register from './components/Registration/registration'




const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/Home" component={Home} />
      <ProtectedRoute exact path="/projects" component={Projects} />
      <ProtectedRoute exact path="/Products" component={AllProductsSection}/>
      <ProtectedRoute exact path="/AboutMe" component={AboutMe} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
      
    </Switch>
  </BrowserRouter>
)

export default App