import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"page_language_id":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__change_page_language", {params: params});
  }
}