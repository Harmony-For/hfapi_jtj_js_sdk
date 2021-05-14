import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null,"is_resume_passed":null}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"},"is_resume_passed":{"type":"TrueClass"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_resume_result", {params: params});
  }
}