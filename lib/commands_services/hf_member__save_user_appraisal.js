import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"id":null,"career_meeting_at":null,"is_able_to_be_supported":null,"has_job_offer":null,"will_go_next_education":null,"has_gived_up_jh":null,"user_hf_member":{"hf_member_id":null},"user_appraisal":{"memo":null}}}
  }

  defined_params(){
    return {"user":{"type":"Object","params":{"id":{"type":"Integer"},"career_meeting_at":{"type":"DateTime"},"is_able_to_be_supported":{"type":"TrueClass"},"has_job_offer":{"type":"TrueClass"},"will_go_next_education":{"type":"TrueClass"},"has_gived_up_jh":{"type":"TrueClass"},"user_hf_member":{"type":"Object","params":{"hf_member_id":{"type":"Integer"}}},"user_appraisal":{"type":"Object","params":{"memo":{"type":"String"}}}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__save_user_appraisal", {params: params});
  }
}