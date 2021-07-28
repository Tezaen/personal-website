import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = 'About - Roober Cruz';
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <div className="non-transparent pagee">
                <h1 className="text-center display-4 pt-5 pb-5">About the website</h1>
                <p className="text-center new-line lead px-5">
                    This is my personal website that is fullstack with express for backend and react for frontend.
                    Check out my Projects and Work experience. I also use this to mess around with react. This site will always be
                    a work in progress
                </p>
                <h5 className="text-center">
                    Version 1.0.0
                </h5>
            </div>
        </div>
    )
}

export default About
