import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"event":{"id":null,"title":{},"body":{},"start_at":null,"apply_url":null,"thumbnail_url":null}}
  }

  defined_params(){
    return {"event":{"type":"Object","params":{"id":{"type":"Integer"},"title":{"type":"Object","params":{}},"body":{"type":"Object","params":{}},"start_at":{"type":"DateTime"},"apply_url":{"type":"String"},"thumbnail_url":{"type":"String"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_event", {params: params});
  }
}