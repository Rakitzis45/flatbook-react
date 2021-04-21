import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateUser from './containers/users/CreateUser'
import UserShow from './containers/users/UserShow'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={CreateUser}/>
        <Route exact path="/users/:id" component={UserShow}/>
      </div>
    </Router>
    
  );
}

export default App;
