import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"resume_question":{"id":null,"title_for_hf_member":null,"title_id":null,"purpose_id":null,"explanation_id":null,"default_template_id":null,"is_allow_reuse":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_resume_question", {params: params});
  }
}