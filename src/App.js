import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
// import the boostrap
import 'bootstrap/dist/css/bootstrap.min.css'

// react-router
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// trant
import "react-toastify/dist/ReactToastify.min.css"
import {ToastContainer} from 'react-toastify'

// firebase
import firebase from 'firebase'
import'firebase/auth'

// components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';



const App=()=> {

  // create state for the user
  const [user, setUser] = useState(null) //null is use for check the auth properly

  return (
   <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user, setUser}} >
    <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='*' component={PageNotFound} /> 
      </Switch>
      <Footer/>
    </UserContext.Provider>
   </Router>
  );
}

export default App;
