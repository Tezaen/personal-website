import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="non-transparent">
                <h1 className="text-center">Welcome to my website!</h1>

                <p className="text-center new-line">
                    {
                        `
                            I am Roober Cruz! I am a software and web developer. My favorite languages
                            would be Python and Javascript. I am currently learning React and React Hooks.
                            This website is also a playground to test stuff as mentioned in the About page.

                            Feel free to look around! Buttons to my projects and job experience are listed below
                        `

                    }   
                </p>
                <div className="row text-center">
                    <div className="col">
                        <Link to='/projects'><button className="btn btn-light btn-block">Projects</button></Link>
                    </div>
                    <div className="col">
                        <  Link to='/jobs'><button className="btn btn-light btn-block">Experience</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
