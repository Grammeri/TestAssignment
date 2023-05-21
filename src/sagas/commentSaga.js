import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from '../actions/commentActions';
import { projectAPI } from '../services/api/api';

export function* fetchComments(action) {
    try {
        const response = yield call(projectAPI.getComments, action.postId);
        yield put({ type: FETCH_COMMENTS_SUCCESS, payload: { postId: action.postId, comments: response.data } });
    } catch (error) {
        yield put({ type: FETCH_COMMENTS_FAILURE, payload: error.message });
    }
}

export function* watchFetchComments() {
    yield takeEvery(FETCH_COMMENTS_REQUEST, fetchComments);
}

export function* commentSaga() {
    yield watchFetchComments();
}
