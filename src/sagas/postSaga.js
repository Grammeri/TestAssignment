import { put, call, takeEvery, delay } from 'redux-saga/effects';
import {
    FETCH_POSTS_REQUEST,
    fetchPostsSuccess,
    fetchPostsFailure,
} from '../actions/postActions';
import { projectAPI } from '../services/api/api';

function* fetchPosts() {
    try {
        yield delay(2000); // Artificial delay
        const response = yield call(projectAPI.getPosts);
        yield put(fetchPostsSuccess(response.data));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

export default function* postSaga() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
