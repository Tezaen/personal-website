import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';

import {
    GET_PROJECTS,
    PROJECT_ERROR
} from '../types';

const ProjectState = props => {
    const initialState = {
        projects: null,
        error: null // will add a search/filter feature later
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Get Projects
    const getProjects = async () => {
        // no need for config if ur not sending anything
        try {
             const res = await axios.get('/api/projects');
             dispatch({
                 type: GET_PROJECTS,
                 payload: res.data
             });
        } catch (error) {
            console.error(error);
            dispatch({
                type: PROJECT_ERROR,
                payload: error.response.message
            });
        }
    }

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
