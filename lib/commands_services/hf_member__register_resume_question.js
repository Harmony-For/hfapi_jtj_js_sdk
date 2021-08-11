import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"resume_question":{"id":null,"title_for_hf_member":null,"title":{"ja":null,"en":null},"purpose":{"ja":null,"en":null},"explanation":{"ja":null,"en":null},"default_template_id":null,"is_allow_reuse":null,"resume_question_templates":[{"id":null,"template_name":{"ja":null,"en":null},"template_text":null,"resume_question_id":null}]}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_resume_question", {params: params});
  }
}