import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"company_name":null,"study_department_category_ids":null,"home_country_ids":null,"is_living_in_japan":null,"japanese_level":null,"age":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__search_recommended_users", {params: params});
  }
}