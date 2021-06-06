import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application_id":null,"mail":{"title":null,"body":null,"as_hf_member_id":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__send_resume_to_company", {params: params});
  }
}