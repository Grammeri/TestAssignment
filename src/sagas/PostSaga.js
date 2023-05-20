import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';
import { getPosts } from '../services/api';

function* fetchPosts() {
    try {
        const response = yield call(getPosts);
        yield put(fetchPostsSuccess(response.data));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

function* postSaga() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default postSaga;
