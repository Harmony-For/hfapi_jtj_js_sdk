import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"email":null,"password":null,"home_country_id":null,"latest_school_department_category_id":null,"graduate_latest_school_at":null,"agree_policy_at":null,"password_confirmation":null,"page_language_id":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__sign_up", {params: params});
  }
}