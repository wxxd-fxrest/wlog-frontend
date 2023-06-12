import { all } from 'axios';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    loading,
});

export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;