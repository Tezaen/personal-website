import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';

import {
    GET_PROJECTS,
    PROJECT_ERROR
} from '../types';

const ProjectState = props => {
    console.log("State here");
    const initialState = {
        projects: null,
        error: null // will add a search/filter feature later
    }

    console.log("Using Reducer");
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Get Projects
    // console.log("Creating getProjects");
    const getProjects = async () => {
        // no need for config if ur not sending anything
        console.log("Trying to get projects");
        try {
            console.log("axios time");
             const res = await axios.get('/api/projects');
             console.log(res.data);
             console.log("dispatching...");
             dispatch({
                 type: GET_PROJECTS,
                 payload: res.data
             });
        } catch (error) {
            console.log("Somethign went wrong.");
            console.error(error);
            dispatch({
                type: PROJECT_ERROR,
                payload: error.response.message
            });
        }
    }
    // console.log("state.projects",state.projects);
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                getProjects
            }}
        >
            { props.children }
        </ProjectContext.Provider>
    )
}

export default ProjectState
