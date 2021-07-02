import React from 'react';
import PropTypes from 'prop-types';

const JobItem = ({ job }) => {
    const { title, desc, endDate, startDate, datePosted } = job

    const TimestampConvert = (timestamp) => {
        var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        console.log("T:", t);
        t.setUTCSeconds(timestamp);
        console.log("T 2:", t);
        var n = t.toLocaleDateString();
        return n;
    }

    const startDateConverted = TimestampConvert(startDate.seconds);
    const endDateConverted = TimestampConvert(endDate.seconds);
    const datePostedConverted = TimestampConvert(datePosted.seconds);

    return (
        <div>
            <h1 className="">
                { title }
            </h1>
            <h4>
                Start Date: { startDateConverted } {'\n'}
                End Date: { endDateConverted }
            </h4>
            <p>
                { desc }
            </p>
            Date Posted: { datePostedConverted }
        </div>
    )
}

JobItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default JobItem
