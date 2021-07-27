import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"search_user_query_ids":null,"sheet_name":null},"sheet_type":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__create_recommended_users_spread_sheet", {params: params});
  }
}