import { Aggregates } from "../index.js";
import { hfapiAxios } from "../index.js";
let host = "http://192.168.50.10:8010";

hfapiAxios.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    // Qs is already included in the Axios package
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false,
    });
  };
  config.baseURL = host;
  return config;
});


let Recruitment = Aggregates.Recruitment

// let recruitment_without_arg = new Recruitment()
let recruitment_with_id = new Recruitment(1)
// let recruitment_with_object = new Recruitment()
recruitment_with_id.after_assign = () => {
  console.log(recruitment_with_id);
}

// console.log(recruitment_without_arg);
// console.log(recruitment_with_id);
// console.log(recruitment_with_object);