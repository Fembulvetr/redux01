import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    CREATE_COMMENTS,
    UPDATE_COMMENTS,
    DELETE_COMMENTS,
    COMMENTS_LOAD,
    LOADER_ON,
    LOADER_OFF,
    ERROR_ON,
    ERROR_OFF,
} from "./types";



export const incrementLikes = () => {
    return {
        type: INCREMENT
    }
}
export const decrementLikes = () => {
    return {
        type: DECREMENT
    }
}

export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        text: text
    }
}

export const createComments = (text, id) => {
    return {
        type: CREATE_COMMENTS,
        data: { text, id }
    }
}

export const updateComments = (text, id) => {
    return {
        type: UPDATE_COMMENTS,
        data: { text, id }
    }
}

export const deleteComments = (id) => {
    return {
        type: DELETE_COMMENTS,
        id
    }
}

export const commentsLoad = () => {
    return async dispatch => {
        try {
            dispatch(loaderOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const jsonData = await response.json();
        const commentsData = jsonData.slice(0, 10);

        dispatch({
            type: COMMENTS_LOAD,
            data: commentsData
        });
        dispatch(loaderOff());
        } catch(err) {
            dispatch(errorOn('Error suka'))
            dispatch(loaderOff());
        }
    }
}

export const loaderOn = () => {
    return {
        type: LOADER_ON,
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_OFF,
    }
}

export const errorOn = (text) => {
    return {
        type: ERROR_ON,
        text
    }
}

export const errorOff = () => {
    return {
        type: ERROR_OFF,
    }
}