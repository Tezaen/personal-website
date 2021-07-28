import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Picture from '../layout/img/roober_cruz_san_fran.jpg';

const Home = () => {
    useEffect(() => {
        document.title = 'Roober Cruz';
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <div className="non-transparent pagee">
                <h1 className="text-center display-4 pt-5"><strong>Roober Cruz</strong></h1>

                <div className="text-center">
                    <img src={ Picture } className="rounded-circle" />
                </div>
                
                <p className="text-center new-line lead mt-5 mb-5 ml-5 mr-5">
                    I am Roober Cruz! I am a recent graduate from California State University and the CSin3 program
                    with a Bachelor's Degree in Computer Science with a concentration in Software Engineering. 
                    Looking to learn as much as I can about software development and programming. Searching for opportunities
                    to grow and make it in the world.
                    <br /><br />
                    Feel free to look around! Buttons to my education, projects, and job experience are listed below
                </p>
                <div className="row text-center px-1">
                    <div className="col">
                        <Link to='/education'><button className="btn btn-light btn-block">Education</button></Link>
                    </div>
                    <div className="col">
                        <Link to='/projects'><button className="btn btn-light btn-block">Projects</button></Link>
                    </div>
                    <div className="col">
                        <Link to='/jobs'><button className="btn btn-light btn-block">Experience</button></Link>
                    </div>
                </div>
                
                {/* Temporary TODO: fix footer*/}
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col">
                            <h1> My Links and Contact Info </h1>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <a href="https://github.com/Tezaen/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="https://github.com/Tezaen/" target="_blank" rel="noopener noreferrer">
                                        <h3>Tezaen</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <a href="https://www.linkedin.com/in/roober-cruz/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="https://www.linkedin.com/in/roober-cruz/" target="_blank" rel="noopener noreferrer">
                                        <h3>Roober Gerard Cruz</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <a href="mailto:roober.cruz@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-envelope-square fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="mailto:roober.cruz@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <h3>roober.cruz@gmail.com</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
