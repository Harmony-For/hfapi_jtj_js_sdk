import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"search_user_query":{"id":null,"filter_name":null,"is_living_in_japan":null,"minimum_japanese_level":null,"maximum_age":null,"study_department_category_ids":null,"home_country_ids":null,"interesting_job_category_ids":null,"free_texts":null}}
  }

  defined_params(){
    return {"search_user_query":{"type":"Object","params":{"id":{"type":"Integer"},"filter_name":{"type":"String"},"is_living_in_japan":{"type":"TrueClass"},"minimum_japanese_level":{"type":"Integer"},"maximum_age":{"type":"Integer"},"study_department_category_ids":{"type":"[Integer]"},"home_country_ids":{"type":"[Integer]"},"interesting_job_category_ids":{"type":"[Integer]"},"free_texts":{"type":"String"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_search_user_query", {params: params});
  }
}