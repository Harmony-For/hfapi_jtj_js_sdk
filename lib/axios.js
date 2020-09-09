import axios from "axios";
import Qs from "qs";


let host = "http://localhost:8010/";

// Format nested params correctly
axios.interceptors.request.use(config => {

  config.paramsSerializer = params => {
    // Qs is already included in the Axios package
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false
    });
  };
  config.baseURL = host
  return config;
});

export { axios as default }