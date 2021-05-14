import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"recruitment_id":null}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"recruitment_id":{"type":"Integer"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__apply", {params: params});
  }
}