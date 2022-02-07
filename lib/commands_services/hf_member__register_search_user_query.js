import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"search_user_query":{"id":null,"filter_name":null,"is_living_in_japan":null,"minimum_japanese_level":null,"maximum_age":null,"study_department_category_ids":null,"home_country_ids":null,"interesting_job_category_ids":null,"skill_ids":null,"graduate_nendo_years":null,"free_texts":null,"genders":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_search_user_query", {params: params});
  }
}