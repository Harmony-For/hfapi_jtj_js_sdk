import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {}
  }

  defined_params(){
    return {}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/user__show_own_applications", {params: params});
  }
}