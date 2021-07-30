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
            { projects !== null && !loading ? 
            <> 
                { 
                    projects.map(project => 
                        <ProjectItem project={project} key={project.title} />    
                    )
                }
            </> : <Spinner />
            }
        </Fragment>
    ) 
}

export default Projects
