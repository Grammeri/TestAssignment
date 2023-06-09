export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsRequest = postId => ({
    type: FETCH_COMMENTS_REQUEST,
    payload: postId
});

export const fetchCommentsSuccess = (postId, comments) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: { postId, comments }
});

export const fetchCommentsFailure = error => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: error
});
