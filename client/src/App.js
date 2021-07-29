import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Jobs from './components/pages/Jobs';
import Education from './components/pages/Education';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'jquery';
import 'popper.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectState from './context/project/ProjectState';
import JobState from './context/job/JobState';


const App = () => {
  return (
    <JobState>
    <ProjectState>
      <Router>
        <div>
          <Navbar />
          <div className="container" id="bg">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/education' component={Education} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/about' component={About} />
            </Switch>
            <div className="icon-bar">
              <a href="https://github.com/Tezaen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/roober-cruz/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:roober.cruz@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square"></i></a>
            </div>
          </div>
          {/* <Footer /> */}
          
        </div>
      </Router>
    </ProjectState>
    </JobState>
  );
}

export default App;
