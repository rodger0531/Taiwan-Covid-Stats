import { call, put, all, takeLatest } from "redux-saga/effects";
import callApi from "../api/apis";
import {
  REQUEST_CONFIRMED_CASES_LIST,
  CONFIRMED_CASES_LIST_RECEIVED,
} from "../redux/actionTypes";

export function* fetchConfirmedList() {
  try {
    const confirmedCasesList = yield call(callApi.stats.getConfirmedCases);
    yield put({
      type: CONFIRMED_CASES_LIST_RECEIVED,
      confirmedCasesList: confirmedCasesList,
    });
  } catch (e) {
    console.log("sagas error", e.message);
  }
}

function* actionWatcher() {
  yield takeLatest(REQUEST_CONFIRMED_CASES_LIST, fetchConfirmedList);
}

function* rootSaga() {
  yield all([actionWatcher()]);
}

export default rootSaga;
