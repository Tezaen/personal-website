import React from 'react';

const Footer = () => {
    return (
        <div id="foot">
            <footer className="bd-footer py-5 pb-5 mt-5 bg-light" >
                <div className="container">
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
            </footer>
        </div>
    )
}

export default Footer