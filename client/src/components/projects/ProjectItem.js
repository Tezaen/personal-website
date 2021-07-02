import React from 'react';
import PropTypes from 'prop-types';
//import ProjectContext from '../../context/project/projectContext';

const ProjectItem = ({ project }) => {
    // destructure the project object
    const { title, desc, datePosted } = project;

    const TimestampConvert = (timestamp) => {
        var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(timestamp);
        var n = t.toLocaleDateString();
        return n;
    }

    console.log(TimestampConvert(datePosted.seconds) );
    const datePostedConverted = TimestampConvert(datePosted.seconds);
    return (
        <div>
            <h1 className="">
                { title }
            </h1>
            <p>
                { desc }
            </p>
            Date Posted: { datePostedConverted }
        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
