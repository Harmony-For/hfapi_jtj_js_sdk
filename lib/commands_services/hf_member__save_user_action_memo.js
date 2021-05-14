import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"id":null,"user_appraisal":{"action_memo":null}}}
  }

  defined_params(){
    return {"user":{"type":"Object","params":{"id":{"type":"Integer"},"user_appraisal":{"type":"Object","params":{"action_memo":{"type":"String"}}}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__save_user_action_memo", {params: params});
  }
}