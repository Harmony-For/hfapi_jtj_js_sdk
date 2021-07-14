import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"mail":{"to":null,"cc":null,"title":null,"body":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__send_mail", {params: params});
  }
}