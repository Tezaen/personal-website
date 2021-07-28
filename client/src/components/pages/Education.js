import React, { useEffect } from 'react';

const Education = () => {
    
    useEffect(() => {
        document.title = 'Education - Roober Cruz';
        // eslint-disable-next-line
    }, []);

    return (
        <div className="non-transparent pagee">
            <h1 className="text-center display-4 pt-4 pb-4">Education</h1>
            <div className="my-5">
                <h1 className="text-center">California State University, Monterey Bay</h1>
                <div className="row lead my-1">
                    <div className="col text-left mx-2">
                        <strong>Degree: </strong> Bachelors in Computer Science (Summa Cum Laude)
                    </div>
                    <div className="col text-right mx-2"> 
                        <strong>Graduated: </strong>May 2021
                    </div>
                </div>
                <div className="row lead my-1">
                    <div className="col text-left mx-2"> 
                        <strong>Concentration: </strong> Software Engineering
                    </div>
                    <div className="col text-right mx-2">
                        <strong>GPA: </strong>3.9
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="text-center">Hartnell Community College</h1>
                <div className="row lead my-1">
                    <div className="col text-left mx-2">
                        <strong>Degree: </strong> Associates in Computer Science
                    </div>
                    <div className="col text-right mx-2"> 
                        <strong>Graduated: </strong>May 2020
                    </div>
                </div>
                <div className="row lead my-1">
                    <div className="col text-left mx-2"> 
                        <strong>Concentration: </strong> Software Engineering
                    </div>
                    <div className="col text-right mx-2">
                        <strong>GPA: </strong>3.9
                    </div>
                </div>
            </div>
            <div className="my-3">
                <h1 className="text-center">CSin3</h1>
                <p className="lead ml-2 mr-0">
                CSin3 is a joint program between Hartnell Community College and California State University, Monterey Bay,
                located in Monterey County. It is an accelerated cohort-based program that allows students in the cohorts
                to earn their Computer Science Bachelor's Degrees in approximately 3 years. <br />
                <a href="https://csin3.com/" target="_blank" rel="noopener noreferrer">
                    More here.
                </a>
                </p>
            </div>
        </div>
    )
}

export default Education
