import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"article":{"id":null,"title":{"ja":null,"en":null},"content":{"ja":null,"en":null},"publish_at":null,"is_hidden":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_article", {params: params});
  }
}