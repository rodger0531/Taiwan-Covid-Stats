import { call, put, all, takeLatest } from "redux-saga/effects";
import callApi from "../api/apis";
import {
  receiveConfirmedCasesList,
  receiveGeneralStats,
} from "../redux/actions";

import {
  REQUEST_CONFIRMED_CASES_LIST,
  REQUEST_GENERAL_STATS,
} from "../redux/actionTypes";

export function* fetchConfirmedList() {
  try {
    const confirmedCasesList = yield call(callApi.stats.getConfirmedCases);
    yield put(receiveConfirmedCasesList(confirmedCasesList));
  } catch (e) {
    console.log("sagas error", e.message);
  }
}

export function* fetchGeneralStats() {
  try {
    const generalStats = yield call(callApi.stats.getGeneralStats);
    yield put(receiveGeneralStats(generalStats));
  } catch (e) {
    console.log("sagas error", e.message);
  }
}

function* actionWatcher() {
  yield takeLatest(REQUEST_CONFIRMED_CASES_LIST, fetchConfirmedList);
  yield takeLatest(REQUEST_GENERAL_STATS, fetchGeneralStats);
}

function* rootSaga() {
  yield all([actionWatcher()]);
}

export default rootSaga;
