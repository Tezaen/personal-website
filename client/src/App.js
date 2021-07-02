import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Jobs from './components/pages/Jobs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import './App2.css';

import ProjectState from './context/project/ProjectState';
import JobState from './context/job/JobState';

const App = () => {
  return (
    <JobState>
    <ProjectState>
      <Router>
        <div className="bg-img">
          <div className="background-img"></div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/jobs' component={Jobs} />
            </Switch>
          </div>
        </div>
      </Router>
    </ProjectState>
    </JobState>
  );
}

export default App;
