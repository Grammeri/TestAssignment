import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';
import { projectAPI } from '../services/api/api';

function* fetchUsers(action) {
    try {
        const response = yield call(projectAPI.getUsers, action.userId);
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

export default function* userSaga() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}
