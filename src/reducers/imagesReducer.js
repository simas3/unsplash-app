import { GET_IMAGES, IMAGES_LOADING, SAVE_QUERY, DELETE_QUERY, DELETE_QUERIES } from '../actions/types'

const initialState = {
    total: undefined,
    images: [],
    queryHistory: [],
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
                total: action.payload.total,
                images: action.payload.results,
                loading: false
            }
        case SAVE_QUERY:
            return {
                ...state,
                queryHistory: [...state.queryHistory, action.payload]
            }
        case DELETE_QUERY:
            return {
                ...state,
                queryHistory: state.queryHistory.filter((_, i) => i !== action.payload)
            }
        case DELETE_QUERIES:
            return {
                ...state,
                queryHistory: []
            }
        default:
            return state
    }
}