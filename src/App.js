import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Login from './components/Login'
import AddUser from './components/User/AddUser'
import NotFound from './components/NotFound'
import Edit from './components/User/Edit'
import UserView from './components/User/UserView'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
<div className="App">
<Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Login}/>
      
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/AddUser" component={AddUser} />
        <Route exact path="/user/edit/:id" component={Edit} />
        <Route exact path="/user/userview/:id" component={UserView}/>
        <Route component={NotFound}/>
      </Switch>


    </div>

    </Router>
  );
}

export default App;
