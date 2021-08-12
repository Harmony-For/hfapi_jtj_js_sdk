import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null,"resume":{"self_pr":null,"skill_pr":null,"why_select_company":null,"why_select_career":null,"why_good_at_job":null,"about_special_skill":null,"resume_question_answers":[{"id":null,"resume_question_id":null,"resume_question_template_id":null,"answer":null}]}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__save_resume_for_application", {params: params});
  }
}