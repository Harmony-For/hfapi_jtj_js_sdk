import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__advance_application_to_next_interview", {params: params});
  }
}