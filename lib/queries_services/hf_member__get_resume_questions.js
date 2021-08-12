import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__get_resume_questions", {params: params});
  }
}