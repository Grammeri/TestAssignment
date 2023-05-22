export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsSuccess = (comments, postId) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: { comments, postId }
});

export const fetchCommentsFailure = (error) => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: error
});

export const fetchCommentsRequest = (postId) => ({
    type: FETCH_COMMENTS_REQUEST,
    postId
});