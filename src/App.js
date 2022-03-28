import Header from './components/HeaderComponent';
import './App.css';
import React from 'react';
import SideBar from './components/SideBar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Trainer from './components/Trainer/Trainer';
import Resources from './components/Resources/Resources';
import Curriculum from './components/Curriculum/Curriculum';
import Audience from './components/Audience/Audience';
import FooterComponent from './components/FooterComponent';
import PreRequisite from './components/Prerequisite/Prerequisite';
function App() {
  return (
    <Router>
    <Header/>
    <SideBar/>
    <img src="./image.png" alt="*" className="image"></img>
    <div className="router">
    
    <Route exact path="/trainer" component={Trainer}/>
    <Route exact path="/resources" component={Resources}/>
    <Route exact path="/audience" component={Audience}/>
    <Route exact path="/curriculum" component={Curriculum}/>
    <Route exact path="/prerequisite" component={PreRequisite}/>
    </div>
    <FooterComponent/>
    </Router>
  );
}

export default App;
