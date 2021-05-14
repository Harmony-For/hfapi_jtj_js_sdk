import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application_id":null}
  }

  defined_params(){
    return {"application_id":{"type":"Integer"}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__show_application_detail", {params: params});
  }
}