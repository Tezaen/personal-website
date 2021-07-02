import {
    GET_JOBS,
    JOB_ERROR
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload,
                loading: false
            }
        case JOB_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}