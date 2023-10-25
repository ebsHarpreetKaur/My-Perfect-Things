import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer, pagesReducer, weatherReducer } from './reducers';

const rootReducer = combineReducers({
    postsReducer,
    pagesReducer,
    weatherReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));