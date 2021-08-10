import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"resume_question_template":{"id":null,"template_name":{"ja":null,"en":null},"template_text":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_resume_question_template", {params: params});
  }
}