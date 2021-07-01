import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><i className={icon} /> Roober Cruz</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/projects'>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/jobs'>Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Roober Cruz',
    icon: 'fas fa-dice-one'
}

export default Navbar
