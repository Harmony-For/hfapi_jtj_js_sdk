import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"id":null,"career_meeting_at":null,"is_able_to_be_supported":null,"has_job_offer":null,"will_go_next_education":null,"has_gived_up_jh":null,"user_hf_member":{"hf_member_id":null},"user_appraisal":{"memo":null}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__save_user_appraisal", {params: params});
  }
}