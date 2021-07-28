import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3">
            <a className="navbar-brand" href="#"><i className={icon}/> {title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/education'>Education</Link>
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
