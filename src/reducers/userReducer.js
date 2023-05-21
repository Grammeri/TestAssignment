import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "../actions/userActions";

const initialState = {
    loading: false,
    users: [],  // updated
    error: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,  // updated
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],  // updated
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
