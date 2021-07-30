import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Jobs from './components/pages/Jobs';
import Education from './components/pages/Education';
import SocialMediaBar from './components/layout/SocialMediaBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'jquery';
import 'popper.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectState from './context/project/ProjectState';
import JobState from './context/job/JobState';
import { useSpring, animated } from 'react-spring';

const App = () => {
  const styleProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0},
    delay: 400
  });


  return (
    <JobState>
    <ProjectState>
      <Router>
        <animated.div style={styleProps}>
          <SocialMediaBar />
          <Navbar />
          <div className="container-lg" id="bg">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/education' component={Education} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </animated.div>
      </Router>
    </ProjectState>
    </JobState>
  );
}

export default App;
