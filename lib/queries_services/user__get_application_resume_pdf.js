import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application_id":null,"as_user":null}
  }

  defined_params(){
    return {"application_id":{"type":"Integer"},"as_user":{"type":"TrueClass"}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/user__get_application_resume_pdf", {params: params});
  }
}