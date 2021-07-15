import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JobItem from './JobItem';
import JobContext from '../../context/job/jobContext';
// import Spinner from 'react-bootstrap/Spinner';
import Spinner from '../layout/Spinner'; 

const Jobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, getJobs, loading } = jobContext;
    useEffect(() => {
        getJobs();
        // eslint-disable-next-line
    }, [])

    if (jobs !== null && jobs.length === 0 && !loading) {
        return <h4>No Jobs to show</h4> 
    }

    return (
        <Fragment>
            { jobs !== null && !loading ? (<TransitionGroup>
                    { jobs.map( job => 
                            <CSSTransition key={job.title} timeout={500} classNames="item">
                                <JobItem job={job} />
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>) : <Spinner />
            }
        </Fragment>
    )
}

export default Jobs