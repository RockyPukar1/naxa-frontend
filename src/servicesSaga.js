import {call, put, takeEvery} from "redux-saga/effects";
import { getServicesSuccess } from "./servicesState";

function* workGetServicesFetch() {
    const services = yield call(fetch, "https://admin.naxa.com.np/api/services");
    const formattedServices = yield services.json();
    yield put(getServicesSuccess(formattedServices));
}

function* serviceSaga() {
    yield takeEvery('services/getServicesFetch', workGetServicesFetch);
}

export default serviceSaga;
