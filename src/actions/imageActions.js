import axios from 'axios';
import { IMAGES_LOADING, GET_IMAGES } from './types'

//Get cimages
export const getImages = () => dispatch => {
    dispatch(setImagesLoading())
    axios.get('')
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


//Images Loading
export const setImagesLoading = () => {
    return {
        type: IMAGES_LOADING
    }
}


