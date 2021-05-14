import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"company_id":null}
  }

  defined_params(){
    return {"company_id":{"type":"Integer"}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__get_company_office_options", {params: params});
  }
}