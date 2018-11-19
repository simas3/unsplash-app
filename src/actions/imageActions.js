import axios from 'axios';
import { IMAGES_LOADING, GET_IMAGES, SAVE_QUERY, DELETE_QUERY, DELETE_QUERIES } from './types'
import keys from '../keys/keys_dev'

//Get Images
export const getImages = query => dispatch => {
    dispatch(setImagesLoading())
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${query}&client_id=${keys.access}`)
        .then(res => {
            dispatch({
                type: GET_IMAGES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_IMAGES,
                payload: {}
            })
        })
}

//Add Post
export const saveQuery = query => dispatch => {

    dispatch({
        type: SAVE_QUERY,
        payload: query
    })
}

export const deleteQuery = query => dispatch => {
    console.log('delete')
    dispatch({
        type: DELETE_QUERY,
        payload: query
    })
}

export const deleteQueries = () => dispatch => {
    dispatch({
        type: DELETE_QUERIES
    })
}


//Images Loading
export const setImagesLoading = () => {
    return {
        type: IMAGES_LOADING
    }
}


