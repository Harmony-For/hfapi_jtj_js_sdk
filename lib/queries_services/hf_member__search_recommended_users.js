import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"search_user_query_ids":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__search_recommended_users", {params: params});
  }
}