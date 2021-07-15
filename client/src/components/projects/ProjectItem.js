import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TimestampToDate from '../../utils/timestamp'
//import ProjectContext from '../../context/project/projectContext';

const ProjectItem = ({ project }) => {
    // destructure the project object
    const { title, desc, datePosted, techs } = project;

    // console.log("Title",title);
    // console.log("Desc", desc);
    // console.log("Date Posted", datePosted);
    // console.log("Techs used", techs);

    const datePostedConverted = TimestampToDate(datePosted.seconds);
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Title className="display-4 text-center">
                    { title }
                </Card.Title>
                <Card.Text>
                    { desc }
                </Card.Text>
                {
                    techs !== undefined ? <Card.Text>
                        Technologies: {
                            techs.map(technology => 
                                <span class="border mx-2 px-2">{technology}</span>
                                )
                        }
                    </Card.Text> : <></>
                }
                Date Posted: { datePostedConverted }
            </Card.Body>
        </Card>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
