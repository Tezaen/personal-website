import React from 'react';
import PropTypes from 'prop-types';
import TimestampToDate from '../../utils/timestamp'

const JobItem = ({ job }) => {
    const { title, company, desc, endDate, startDate, datePosted } = job

    const startDateConverted = TimestampToDate(startDate.seconds);
    const endDateConverted = TimestampToDate(endDate.seconds);
    const datePostedConverted = TimestampToDate(datePosted.seconds);
    
    return (
        <div className="card my-2 mx-5">
            <div className="card-body">
                <h1 className="text-center">
                    { title }
                </h1>
                <div className="card-subtitle lead my-1">
                    <strong>Company:</strong> { company }
                </div>
                <div className="card-subtitle lead my-1">
                    <strong>Start Date:</strong> { startDateConverted }
                </div>
                <div className="card-subtitle lead my-1">
                    <strong>End Date:</strong> { endDateConverted }
                </div>
                <div className="card-text" dangerouslySetInnerHTML={{__html: desc}}> 
                </div>
                {/* <Card.Text> I would actually just use this instead of dangerouslySetInnerHtml
                   { desc }     as it is vulnerable to cross site SCRIPTING (XSS)
                                maybe use another node package. For now it will stick
                </Card.Text> */}
                <div className="card-text mt-2">
                    Date Posted: { datePostedConverted }
                </div>
            </div>
        </div>
    )
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobItem
