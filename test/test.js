import { hfapiAxios } from "../index.js";
import { GetMasterDataQueriesService } from "../index.js";
let host = "http://localhost:3000/";

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


console.log(hfapiAxios == GetMasterDataQueriesService.axios);
console.log(hfapiAxios == GetMasterDataQueriesService.axios);
console.log(hfapiAxios == GetMasterDataQueriesService.axios);

const params = new GetMasterDataQueriesService.Params();

params.target.countries = true

console.log(params)

GetMasterDataQueriesService.execute(params).then(resp=>{
  console.log(resp.data)
}).catch(resp=>{
  console.log(resp.config);
})