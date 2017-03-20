import {createStore, applyMiddleware} from 'redux';
import videosReducer from '../reducers/videos_reducer';
import thunk from '../middleware/thunk';

export const configureStore = () => createStore(videosReducer, applyMiddleware(thunk));
