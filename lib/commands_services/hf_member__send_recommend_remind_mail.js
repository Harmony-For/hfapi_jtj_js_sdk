import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"recommend_mail_id":null,"mail":{"title":null,"body":null}}
  }

  defined_params(){
    return {"recommend_mail_id":{"type":"Integer"},"mail":{"type":"Object","params":{"title":{"type":"String"},"body":{"type":"String"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__send_recommend_remind_mail", {params: params});
  }
}