import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null,"resume":{"self_pr":null,"skill_pr":null,"why_select_company":null,"why_select_career":null,"why_good_at_job":null,"about_special_skill":null,"hf_remark":null}}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"},"resume":{"type":"Object","params":{"self_pr":{"type":"String"},"skill_pr":{"type":"String"},"why_select_company":{"type":"String"},"why_select_career":{"type":"String"},"why_good_at_job":{"type":"String"},"about_special_skill":{"type":"String"},"hf_remark":{"type":"String"}}}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__correct_resume", {params: params});
  }
}