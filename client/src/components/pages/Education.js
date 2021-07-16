import React from 'react';
import { Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Education = () => {
    return (
        <div className="non-transparent">
            <h1 className="text-center display-4 pt-4 pb-4">Education</h1>
            <hr className="mt-2 mb-5"/>
            <div className="my-5">
                <h1 className="text-center">California State University, Monterey Bay</h1>
                <Row className="lead my-1">
                    <Col className="text-left mx-2">
                        <strong>Degree: </strong> Bachelors in Computer Science (Summa Cum Laude)
                    </Col>
                    <Col className="text-right mx-2"> 
                        <strong>Graduated: </strong>May 2021
                    </Col>
                </Row>
                <Row className="lead my-1">
                    <Col className="text-left mx-2"> 
                        <strong>Concentration: </strong> Software Engineering
                    </Col>
                    <Col className="text-right mx-2">
                        <strong>GPA: </strong>3.9
                    </Col>
                </Row>
            </div>
            <div className="my-2">
                <h1 className="text-center">Hartnell Community College</h1>
                <Row className="lead my-1">
                    <Col className="text-left mx-2">
                        <strong>Degree: </strong> Associates in Computer Science
                    </Col>
                    <Col className="text-right mx-2"> 
                        <strong>Graduated: </strong>May 2020
                    </Col>
                </Row>
                <Row className="lead my-1">
                    <Col className="text-left mx-2"> 
                        <strong>Concentration: </strong> Software Engineering
                    </Col>
                    <Col className="text-right mx-2">
                        <strong>GPA: </strong>3.9
                    </Col>
                </Row>
            </div>
            <div className="my-2">
                <h1 className="text-center">CSin3</h1>
                <p className="lead ml-2 mr-0">
                CSin3 is a joint program between Hartnell Community College and California State University, Monterey Bay,
                located in Monterey County. It is an accelerated cohort-based program that allows students in the cohorts
                to earn their Computer Science Bachelor's Degrees in approximately 3 years.  
                </p>
            </div>
        </div>
    )
}

export default Education
