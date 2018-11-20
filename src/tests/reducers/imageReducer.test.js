import imageReducer from '../../reducers/imagesReducer'


describe('Image Reducer', () => {

    test('has a default state', () => {
        expect(imageReducer(undefined, { type: 'unexpected' })).toEqual({
            total: undefined,
            images: [],
            queryHistory: [],
            loading: false
        })
    })

    test('GET_IMAGES', () => {
        expect(imageReducer(undefined, {
            type: 'GET_IMAGES',
            payload: {
                total: 0,
                results: []
            }
        })).toEqual({
            total: 0,
            images: [],
            queryHistory: [],
            loading: false
        })
    })
})