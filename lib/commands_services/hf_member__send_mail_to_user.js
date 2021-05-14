import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user_id":null,"mail":{"title":null,"body":null}}
  }

  defined_params(){
    return {"user_id":{"type":"Integer"},"mail":{"type":"Object","params":{"title":{"type":"String"},"body":{"type":"String"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__send_mail_to_user", {params: params});
  }
}