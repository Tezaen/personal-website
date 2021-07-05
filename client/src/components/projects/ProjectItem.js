import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
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
        <Card>
            <Card.Body>
                <Card.Title className="display-4 text-center">
                    { title }
                </Card.Title>
                <Card.Text>
                    { desc }
                </Card.Text>
                Date Posted: { datePostedConverted }
            </Card.Body>
        </Card>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
