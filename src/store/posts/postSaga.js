import { call, put, takeEvery, all} from 'redux-saga/effects'
import {setError, sagaFetchingPost, setLoading, loadPosts} from "./postSlice";
import axios from "axios";

function fetchingPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.data);
}

// sagaWorker
function* fetchPosts() {
    try {
        yield put(setLoading(true));

        yield new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve();
            }, 2000);
        });

        // const data = yield call(fetchingPosts);
        const data = yield call(() => {
            return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(res => res.data);
        });

        yield put(loadPosts(data));
        yield put(setLoading(false));

    } catch (e) {
        yield put(setError(e.message));
        yield put(setLoading(false));
    }
}

function* helloSaga() {
    console.log('Hello Sagas!')
}

// sagaWatcher
function* watchFetchPost() {
    yield takeEvery(sagaFetchingPost, fetchPosts);
}

function* rootSaga() {
    yield all([
        helloSaga(),
        watchFetchPost()
    ]);
}

export default rootSaga;