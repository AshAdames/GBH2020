import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  NavBar from "./components/header-component";
import About from "./components/random-component";
import Login from './components/login-component';
import DriveForm from './components/driveform-component';
function App() {
    return (
        <Router>
            <NavBar/>
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/driveform" exact component={DriveForm} />
        </Router>
  )
}

export default App;
