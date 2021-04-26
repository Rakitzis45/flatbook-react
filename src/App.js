import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginUser from './containers/users/LoginUser'
import UserShow from './containers/users/UserShow'
import SignupUser from './containers/users/SignupUser'
import {connect} from 'react-redux'
import React from 'react';
import {checkLoggedIn} from './actions/user'
import NavBar from './containers/NavBar'

class App extends React.Component {

  componentDidMount(){
    this.props.checkLoggedIn()
  }

  render(){
  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Route exact path="/" component={LoginUser}/>
        <Route exact path="/users/:id" component={UserShow}/>
        <Route exact path='/signup' component={SignupUser}/>
      </div>
    </Router>
    
  );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    checkLoggedIn: ()=>{dispatch(checkLoggedIn());}
  }
}

export default connect(null, mapDispatchToProps)(App);
