import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"id":null}
  }

  defined_params(){
    return {"id":{"type":"Integer"}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/aggregates__recruitment", {params: params});
  }
}