import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from '../actions/commentActions';

const initialState = {
    loading: false,
    comments: {},
    error: '',
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: { ...state.comments, [action.payload.postId]: action.payload.comments },
                error: ''
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
