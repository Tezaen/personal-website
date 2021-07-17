import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    useEffect(() => {
        document.title = 'About - Roober Cruz';
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <div className="non-transparent">
                <h1 className="text-center display-4 pt-5 pb-5">About the website</h1>
                <p className="text-center new-line lead px-5">
                    This is my personal website that is fullstack with express for backend and react for frontend.
                    Check out my Projects and Work experience. I also use this to mess around with react. I won't push most of the changes I do unless it looks good.
                    Also the footer is broken here. Trying to fix.
                </p>
            </div>
        </Container>
    )
}

export default About
