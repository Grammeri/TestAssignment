export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_USER_POSTS_REQUEST = 'FETCH_USER_POSTS_REQUEST'; // Add this line

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (data) => ({ type: FETCH_POSTS_SUCCESS, payload: data });
export const fetchPostsFailure = (error) => ({ type: FETCH_POSTS_FAILURE, payload: error });
export const fetchUserPostsRequest = (userId) => ({ type: FETCH_USER_POSTS_REQUEST, payload: userId }); // Add this line
