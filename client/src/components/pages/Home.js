import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Picture from '../layout/img/roober_cruz_san_fran.jpg';

const Home = () => {
    return (
        <Container>
            <div className="non-transparent">
                <h1 className="text-center display-4 pt-5"><strong>Roober Cruz</strong></h1>

                <div className="text-center">
                    <Image src={ Picture } roundedCircle/>
                </div>
                
                <p className="text-center new-line lead">
                    {
                        `
                            I am Roober Cruz! I am a software and web developer. My favorite languages
                            would be Python and Javascript. I am currently learning React and React Hooks.
                            This website is also a playground to test stuff as mentioned in the About page.

                            Feel free to look around! Buttons to my education, projects, and job experience are listed below
                        `
                    }   
                </p>
                <Row className="text-center px-1">
                    <Col>
                        <  Link to='/education'><button className="btn btn-light btn-block">Education</button></Link>
                    </Col>
                    <Col>
                        <Link to='/projects'><button className="btn btn-light btn-block">Projects</button></Link>
                    </Col>
                    <Col>
                        <  Link to='/jobs'><button className="btn btn-light btn-block">Experience</button></Link>
                    </Col>
                </Row>
                
                {/* <div className="text-center new-line lead pt-5">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div> */}
            </div>
        </Container>
    )
}

export default Home
