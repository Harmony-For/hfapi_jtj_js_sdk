import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"target_study_department_categories_id_eq_any":null,"company_office_prefectures_id_eq_any":null,"related_countries_id_eq_any":null,"required_jlpt_lteq":null,"is_available_from_overseas_true":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/search_recruitments", {params: params});
  }
}