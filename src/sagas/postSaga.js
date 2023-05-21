import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, fetchPostsSuccess, fetchPostsFailure} from '../actions/postActions';
import { projectAPI } from '../services/api/api';

export function* fetchPosts() {
    try {
        const response = yield call(projectAPI.getPosts);
        yield put(fetchPostsSuccess(response.data));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

export default function* postSaga() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
