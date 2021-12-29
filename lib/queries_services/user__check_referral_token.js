import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"token":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/user__check_referral_token", {params: params});
  }
}