import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import postsReducer from "./posts/postSlice"
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from "./posts/postSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postsReducer
    },
    middleware: [logger, sagaMiddleware, ...getDefaultMiddleware()],
});

sagaMiddleware.run(rootSaga);

export default store;