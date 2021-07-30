import React, { useEffect } from 'react';
import ProjectsList from '../projects/Projects';
import { useSpring, animated } from 'react-spring';

const Projects = () => {
    // const styleProps = useSpring({
    //     to: { opacity: 1 },
    //     from: { opacity: 0}
    // });

    useEffect(() => {
        document.title = 'Projects - Roober Cruz';
        // eslint-disable-next-line
    }, []);

    return ( 
        <div className="non-transparent pagee" >
            <h1 className="text-center display-4 pt-4 pb-4">Projects</h1>
            <div className="container text-center lead mb-4">
                <p>Projects from school or are extracurricular</p>
            </div>
            <ProjectsList />
        </div>
    )
}

export default Projects
