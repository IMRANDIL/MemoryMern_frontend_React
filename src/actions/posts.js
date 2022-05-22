import * as api from '../api/index';


//action creators....

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);
        console.log(data);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.response.data);
    }
}



export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}