import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"recommend_mail":{"id":null,"hf_member_id":null,"recommend_mail_type":null,"is_including_meeting_schedule":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__set_recommend_mail", {params: params});
  }
}