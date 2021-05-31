import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"event":{"id":null,"title":{"ja":null,"en":null},"body":{"ja":null,"en":null},"start_at":null,"apply_url":null,"thumbnail_url":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_event", {params: params});
  }
}