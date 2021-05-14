import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"article":{"id":null,"title":{},"content":{},"publish_at":null,"is_hidden":null}}
  }

  defined_params(){
    return {"article":{"type":"Object","params":{"id":{"type":"Integer"},"title":{"type":"Object","params":{}},"content":{"type":"Object","params":{}},"publish_at":{"type":"DateTime"},"is_hidden":{"type":"TrueClass"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_article", {params: params});
  }
}