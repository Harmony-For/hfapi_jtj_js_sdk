import axios from "axios";
import Qs from "qs";



// Format nested params correctly
axios.interceptors.request.use(config => {

  config.paramsSerializer = params => {
    // Qs is already included in the Axios package
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false
    });
  };
  return config;
});

export { axios as default }