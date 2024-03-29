import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user_id":null,"filtered":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__get_user_resume_pdf", {params: params});
  }
}