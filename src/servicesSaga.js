import { call, put, takeEvery } from "redux-saga/effects";
import { getServicesSuccess, getServicesFailure } from "./servicesState";

function* workGetServicesFetch() {
  try {
    const services = yield call(
      fetch,
      "https://admin.naxa.com.np/api/services"
    );
    let formattedServices = yield services.json();
    formattedServices = formattedServices.map((service) => {
      let description1 = service.description1 || "";
      let description2 = service.description2 || "";
      delete service["description1"];
      delete service["description2"];
      let parser = new DOMParser();
      description1 = parser.parseFromString(description1, "text/html");
      description2 = parser.parseFromString(description2, "text/html");
      let p1 = description1.querySelector("p");
      let p2 = description2.querySelector("p");
      description1 = p1
        ? p1.innerHTML.replace(/<p[^>]*>(.*?)<\/p>/, "$1")
        : description1.body.innerHTML.replace(/<[^>]+>/g, "");
      description2 = p2
        ? p2.innerHTML.replace(/<p[^>]*>(.*?)<\/p>/, "$1")
        : description2.body.innerHTML.replace(/<[^>]+>/g, "");
      service.description1 = description1;
      service.description2 = description2;
      return service;
    });
    yield put(getServicesSuccess(formattedServices));
  } catch (error) {
    yield put(getServicesFailure(error));
  }
}

function* serviceSaga() {
  yield takeEvery("services/getServicesFetch", workGetServicesFetch);
}

export default serviceSaga;
