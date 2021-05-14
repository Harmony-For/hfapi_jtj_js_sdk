import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"target_study_department_categories_id_eq_any":null,"company_office_prefectures_id_eq_any":null,"related_countries_id_eq_any":null,"required_jlpt_gteq":null,"is_available_from_overseas_true":null,"job_categories_id_eq_any":null,"recruitment_careers_first_living_country_id_eq_any":null,"recruitment_careers_last_living_country_id_eq_any":null,"recruitment_careers_is_work_globaly_true":null,"required_skills_id_eq_any":null}}
  }

  defined_params(){
    return {"q":{"type":"Object","params":{"target_study_department_categories_id_eq_any":{"type":"[Integer]"},"company_office_prefectures_id_eq_any":{"type":"[Integer]"},"related_countries_id_eq_any":{"type":"[Integer]"},"required_jlpt_gteq":{"type":"Integer"},"is_available_from_overseas_true":{"type":"TrueClass"},"job_categories_id_eq_any":{"type":"[Integer]"},"recruitment_careers_first_living_country_id_eq_any":{"type":"[Integer]"},"recruitment_careers_last_living_country_id_eq_any":{"type":"[Integer]"},"recruitment_careers_is_work_globaly_true":{"type":"TrueClass"},"required_skills_id_eq_any":{"type":"[Integer]"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/search_recruitments", {params: params});
  }
}