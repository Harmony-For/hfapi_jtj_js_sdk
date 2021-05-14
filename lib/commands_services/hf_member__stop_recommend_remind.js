import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"recommend_mail":{"id":null}}
  }

  defined_params(){
    return {"recommend_mail":{"type":"Object","params":{"id":{"type":"Integer"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__stop_recommend_remind", {params: params});
  }
}