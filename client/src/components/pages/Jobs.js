import React, { useEffect } from 'react';
import JobsList from '../jobs/Jobs';

const Jobs = () => {
    useEffect(() => {
        document.title = 'Experience - Roober Cruz';
        // eslint-disable-next-line
    }, []);

    return (
        <div className="non-transparent">
            <h1 className="text-center display-4 pt-4 pb-4">Experience</h1>
            <JobsList />
        </div>
    )
}

export default Jobs
