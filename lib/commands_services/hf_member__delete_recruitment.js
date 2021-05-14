import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"recruitment":{"id":null}}
  }

  defined_params(){
    return {"recruitment":{"type":"Object","params":{"id":{"type":"Integer"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__delete_recruitment", {params: params});
  }
}