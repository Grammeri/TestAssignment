export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUsersSuccess = (data) => ({
    type: FETCH_USERS_SUCCESS,
    payload: data
});

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});

export const fetchUserSuccess = (data) => ({
    type: FETCH_USER_SUCCESS,
    payload: data
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error
});

export const fetchUserRequest = (userId) => ({
    type: FETCH_USER_REQUEST,
    payload: userId
});
