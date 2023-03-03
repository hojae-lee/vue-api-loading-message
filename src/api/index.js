import axios from "axios";

const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function fetchGetData() {
  return $axios.get(`/backend`);
}

export { fetchGetData };
