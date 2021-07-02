import React, { useReducer } from 'react';
import axios from 'axios';
import JobContext from './jobContext';
import jobReducer from './jobReducer';

import {
    GET_JOBS,
    JOB_ERROR
} from '../types'

const JobState = props => {
    const initialState = {
        jobs: null,
        error: null
    };

    const [state, dispatch] = useReducer(jobReducer, initialState);

    const getJobs = async () => {
        try {
            const res = await axios.get('/api/jobs');
            dispatch({
                type: GET_JOBS,
                payload: res.data
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: JOB_ERROR,
                payload: error.response.message
            });
        }
    }

    return (
        <JobContext.Provider
            value={{
                jobs: state.jobs,
                getJobs
            }}
        >
            { props.children }
        </JobContext.Provider>
    )
}

export default JobState
