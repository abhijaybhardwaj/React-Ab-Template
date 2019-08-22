import React,  {Component}  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import WebsiteWork from "./component/WebsiteWork";
import Brandingwork from "./component/BrandingWork";
import Error from "./404";

class App extends Component{
  render(){
    return(
        <Router>
           <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/WebsiteWork" component={WebsiteWork} />
            <Route exact path="/Brandingwork" component={Brandingwork} />
            <Route exact path="/Contact" component={Contact} />
            <Route  component={Error} />
          </Switch>
          <Footer />
        </Router>
    );
  }

}

export default App;
