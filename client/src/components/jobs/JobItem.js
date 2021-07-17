import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TimestampToDate from '../../utils/timestamp'

const JobItem = ({ job }) => {
    const { title, company, desc, endDate, startDate, datePosted } = job

    const startDateConverted = TimestampToDate(startDate.seconds);
    const endDateConverted = TimestampToDate(endDate.seconds);
    const datePostedConverted = TimestampToDate(datePosted.seconds);
    console.log(desc);
    return (
        <Card className="my-2 mx-5">
            <Card.Body>
                <h1 className="text-center">
                    { title }
                </h1>
                <Card.Subtitle className="lead my-1">
                    <strong>Company:</strong> { company }
                </Card.Subtitle>
                <Card.Subtitle className="lead my-1">
                    <strong>Start Date:</strong> { startDateConverted }
                </Card.Subtitle>
                <Card.Subtitle className="lead my-1">
                    <strong>End Date:</strong> { endDateConverted }
                </Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={{__html: desc}}> 
                </Card.Text>
                {/* <Card.Text> I would actually just use this instead of dangerouslySetInnerHtml
                   { desc }     as it is vulnerable to cross site SCRIPTING (XSS)
                                maybe use another node package. For now it will stick
                </Card.Text> */}
                <Card.Text>
                    Date Posted: { datePostedConverted }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

JobItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default JobItem
