import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const JobItem = ({ job }) => {
    const { title, desc, endDate, startDate, datePosted } = job

    const TimestampConvert = (timestamp) => {
        var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(timestamp);
        var n = t.toLocaleDateString();
        return n;
    }

    const startDateConverted = TimestampConvert(startDate.seconds);
    const endDateConverted = TimestampConvert(endDate.seconds);
    const datePostedConverted = TimestampConvert(datePosted.seconds);

    return (
        <Card>
            <Card.Body>
                <Card.Title className="display-4 text-center">
                    { title }
                </Card.Title>
                <Card.Subtitle className="lead">
                    Start Date: { startDateConverted } {'\n'}
                    End Date: { endDateConverted }
                </Card.Subtitle>
                <Card.Text>
                    { desc }
                </Card.Text>
                Date Posted: { datePostedConverted }
            </Card.Body>
        </Card>
    )
}

JobItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default JobItem
