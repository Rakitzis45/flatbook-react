import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginUser from './containers/users/LoginUser'
import UserShow from './containers/users/UserShow'
import SignupUser from './containers/users/SignupUser'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginUser}/>
        <Route exact path="/users/:id" component={UserShow}/>
        <Route exact path='/signup' component={SignupUser}/>
      </div>
    </Router>
    
  );
}

export default App;
