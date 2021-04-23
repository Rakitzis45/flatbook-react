import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginUser from './containers/users/LoginUser'
import UserShow from './containers/users/UserShow'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginUser}/>
        <Route exact path="/users/:id" component={UserShow}/>
      </div>
    </Router>
    
  );
}

export default App;
