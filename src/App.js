import './App.css';
import React, { useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  NavBar from "./components/header-component";
import About from "./components/random-component";
import { Login } from './components/login-component';
import DriveShare  from './components/driveshare-component';
import SignUp from "./components/signup-component";
import Home from "./components/home-components";
import DriveForm from './components/driveform-component';
import {UserContext} from './userContext'

function App() {
    const [userName, setUser] = useState(null)
    return (
        <Router>
            <NavBar />
            
            <Route path="/" exact component={Home} />
            <UserContext.Provider value={{ userName, setUser }}>
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={SignUp} />
                <Route path="/driveform" exact component={DriveForm} />
                <Route path="/about" exact component={About} />
            </UserContext.Provider>
        </Router>
        
  )
}

export default App;
