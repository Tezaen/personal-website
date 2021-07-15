import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TimestampToDate from '../../utils/timestamp'

const JobItem = ({ job }) => {
    const { title, company, desc, endDate, startDate, datePosted } = job

    const startDateConverted = TimestampToDate(startDate.seconds);
    const endDateConverted = TimestampToDate(endDate.seconds);
    const datePostedConverted = TimestampToDate(datePosted.seconds);

    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Title className="display-4 text-center">
                    { title }
                </Card.Title>
                <Card.Subtitle className="lead my-1">
                    <strong>{ company }</strong> 
                </Card.Subtitle>
                <Card.Subtitle className="lead my-1">
                    <strong>Start Date:</strong> { startDateConverted }
                </Card.Subtitle>
                <Card.Subtitle className="lead my-1">
                    <strong>End Date:</strong> { endDateConverted }
                </Card.Subtitle>
                <Card.Text>
                    { desc }
                </Card.Text>
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