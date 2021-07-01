import {
    GET_PROJECTS,
    PROJECT_ERROR
} from '../types';

export default (state, action) => {
    console.log(action.type);
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case PROJECT_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            console.log("default");
            return state
    }
}