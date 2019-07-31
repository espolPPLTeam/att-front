import Vue from "vue";
/**
 * Service to connect to an api using vue-resource
 */
const ApiService = {
  setHeader(key, value) {
    Vue.http.headers.common[key] = value;
  },
  getApi(url, queryData) {
    return Vue.http.get(url, queryData);
  },
  postApi(url, payloadData) {
    return Vue.http.post(url, payloadData);
  },
  putApi(url, payloadData) {
    return Vue.http.put(url, payloadData);
  },
  deleteApi(url, payloadData) {
    return Vue.http.delete(url, payloadData);
  }
}

export default ApiService;
