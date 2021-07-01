import React, { Fragment, useContext, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';

const Projects = () => {
    const projectContext = useContext(ProjectContext);
    
    const { projects, getProjects } = projectContext;

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])
    console.log("In projects.js",projects);
    if (projects === null) {
        return <h4>No Projects to show</h4> 
    }

    return (
        <Fragment>
            {
                projects.map(project => <ProjectItem project={project} />)
            }
        </Fragment>
    )
}

export default Projects
