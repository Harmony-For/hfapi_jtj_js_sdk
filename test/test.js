import { GetMasterDataQueriesService } from "../index.js";

const params = new GetMasterDataQueriesService.Params();

console.log(params)

params.target.countries = true

GetMasterDataQueriesService.execute(params).then(resp=>{
  console.log(resp)
})