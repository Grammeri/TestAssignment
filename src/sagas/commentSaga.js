import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from '../actions/commentActions';
import { projectAPI } from '../services/api/api';

function* fetchComments(action) {
    try {
        yield delay(2000); // 2-second delay
        const response = yield call(projectAPI.getComments, action.payload);
        yield put({ type: FETCH_COMMENTS_SUCCESS, payload: { postId: action.payload, comments: response.data } });
    } catch (error) {
        yield put({ type: FETCH_COMMENTS_FAILURE, payload: error.message });
    }
}

function* watchFetchComments() {
    yield takeEvery(FETCH_COMMENTS_REQUEST, fetchComments);
}

export default function* commentSaga() {
    yield watchFetchComments();
}
