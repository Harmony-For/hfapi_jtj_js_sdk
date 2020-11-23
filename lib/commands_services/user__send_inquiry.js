import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"massage":null,"referer":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__send_inquiry", {params: params});
  }
}