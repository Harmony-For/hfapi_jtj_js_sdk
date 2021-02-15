import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"search_user_query":{"id":null,"filter_name":null,"is_living_in_japan":null,"minimum_japanese_level":null,"maximum_age":null,"search_user_query_study_department_categories":[{"study_department_category_id":null}],"search_user_query_home_countries":[{"home_country_id":null}]}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_search_user_query", {params: params});
  }
}