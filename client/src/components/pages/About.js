import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className="non-transparent">
                <h1 className="text-center display-4">About the website</h1>
                <p className="text-center new-line lead">
                    This is my personal website that is fullstack with express for backend and react for frontend.
                    Check out my Projects and Work experience. I also use this to mess around with react. I won't push most of the changes I do unless it looks good
                </p>
            </div>
        </Container>
    )
}

export default About
