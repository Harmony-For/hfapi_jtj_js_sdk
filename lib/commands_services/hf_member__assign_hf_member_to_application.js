import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null},"hf_member":{"id":null}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"}}},"hf_member":{"type":"Object","params":{"id":{"type":"Integer"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__assign_hf_member_to_application", {params: params});
  }
}