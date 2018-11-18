import { GET_IMAGES, IMAGES_LOADING } from './../actions/types'

const initialState = {
    images: [],
    loading: false

}

export default function (state = initialState, action) {
    switch (action.type) {
        case IMAGES_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
                loading: false
            }
        default:
            return state
    }
}