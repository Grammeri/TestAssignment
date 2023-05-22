import { put, call, takeEvery } from 'redux-saga/effects';
import {
    FETCH_USER_REQUEST,
    fetchUserSuccess,
    fetchUserFailure,
    // other imports...
} from '../actions/userActions';
import { projectAPI } from '../services/api/api';

function* fetchUser(action) {
    try {
        const response = yield call(projectAPI.getUser, action.payload);
        yield put(fetchUserSuccess(response.data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

export default function* userSaga() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}
