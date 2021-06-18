import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Logout from './pages/logout/Logout';
import HandOver from './pages/hand-it-over/Hand-it-over';

function App() {

  return (
    <>
      <div className="App">
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/logout" component={Logout}/>
                  <Route path="/hand-over" component={HandOver}/>
              </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;
