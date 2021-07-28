import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';
import Spinner from '../layout/Spinner';

const Projects = () => {
    const projectContext = useContext(ProjectContext);
    const { projects, getProjects, loading } = projectContext;

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])
    // console.log("In projects.js",projects);
    if (projects !== null && projects.length === 0 && !loading) {
        return <h4>No Projects to show</h4> 
    }

    return (
        <Fragment>
            { projects !== null && !loading ? <>  {/* <TransitionGroup></TransitionGroup> */}
                    { 
                        projects.map(project => 
                            // <CSSTransition key={project.title} timeout={500} classNames="item">
                                <ProjectItem project={project} key={project.title} />
                            // </CSSTransition>
                        )
                    }
                </> : <Spinner />
            }
        </Fragment>
    ) // projects.map(project => <ProjectItem project={project} />)
}

export default Projects
