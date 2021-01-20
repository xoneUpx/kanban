import { takeEvery, call, put, all } from "redux-saga/effects";
import Constants from '../constants/constants_index.js';

export default function* watcherSaga() {
//    yield alert('push to fetch');
//    yield takeEvery(Constants.DATA_REQUESTED, workerSaga);
 //   yield all([ dataRequest(), fetchReady()])
    yield all([ dataRequest()])
}
function* fetchReady() { alert('fetching...')};
function* dataRequest() { yield takeEvery(Constants.DATA_REQUESTED, workerSaga)};
function* workerSaga(action) {
    try {
      //call() for testing? return object
          const payload = yield call(getData, action.payload.url);
          yield put({ type: Constants.DATA_LOADED, payload });
        } catch (e) {
              yield put({ type: Constants.API_ERRORED, payload: e });
            }
}
function getData(url) {
    return fetch(url).then(response =>
          response.json()
        );
}
