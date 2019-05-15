import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import companyRegistration from './components/companyRegistration'
import companyLogin from './components/companyLogin'
import logisticsRegistration from './components/logisticsRegistration'
import logisticsLogin from './components/logisticsLogin'
import truckerRegistration from './components/truckerRegistration'
import truckerLogin from './components/truckerLogin'
import companyMaps from './components/companyMaps'
import truckerMaps from './components/truckerMaps'
import logisticsMaps from './components/logisticsMaps'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar/>
          <Route exact path ="/" component = {Landing}/>
          <div className="container">
            <Route path ="/companyRegistration" component ={companyRegistration}/>
            <Route path ="/companyLogin" component ={companyLogin}/>
            <Route path ="/logisticsRegistration" component ={logisticsRegistration}/>
            <Route path ="/logisticsLogin" component ={logisticsLogin}/>
            <Route path ="/truckerRegistration" component ={truckerRegistration}/>
            <Route path ="/truckerLogin" component ={truckerLogin}/>
            <Route path ="/register" component ={Register}/>
            <Route path ="/login" component ={Login}/>
            <Route path ="/profile" component ={Profile}/>
            <Route path ="/companyMaps" component ={companyMaps}/>
            <Route path ="/truckerMaps" component ={truckerMaps}/>
            <Route path ="/logisticsMaps" component ={logisticsMaps}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
