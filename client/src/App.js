import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/projects/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';

import ProjectState from './context/project/ProjectState';

const App = () => {
  return (
    <ProjectState>
      <Router>
        <Fragment>
          <div className="background-img"></div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/jobs' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ProjectState>
  );
}

export default App;
