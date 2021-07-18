import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Jobs from './components/pages/Jobs';
import Education from './components/pages/Education';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App2.css';

import ProjectState from './context/project/ProjectState';
import JobState from './context/job/JobState';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <JobState>
    <ProjectState>
      <Router>
        <div className="background-img">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/education' component={Education} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ProjectState>
    </JobState>
  );
}

export default App;
