import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateUser from './containers/users/CreateUser'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={CreateUser}/>
      </div>
    </Router>
    
  );
}

export default App;
