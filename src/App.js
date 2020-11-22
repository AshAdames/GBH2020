import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  NavBar from "./components/header-component";
import Resources from "./components/resources-component";
import Login from './components/login-component';
import SignUp from "./components/signup-component";
import Home from "./components/home-components";
import DriveForm from './components/driveform-component';
import DrivesList from './components/driveslist-component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar/>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/driveform" exact component={DriveForm} />
            <Route path="/driveslist" exact component={DrivesList} />
        </Router>
        
  )
}

export default App;
