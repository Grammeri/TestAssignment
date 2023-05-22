import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from '../actions/commentActions';

const initialState = {
    comments: {},
    loadingComments: false,
    error: null
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loadingComments: true,
                error: null
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.postId]: action.payload.comments
                },
                loadingComments: false
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loadingComments: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default commentReducer;
