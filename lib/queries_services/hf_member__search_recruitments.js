import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"study_department_categories_id_eq_any":null,"first_work_prefecture_id_eq_any":null,"related_countries_id_eq_any":null,"required_jlpt_lteq":null,"is_available_from_overseas_true":null,"is_available_by_mid_career_true":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__search_recruitments", {params: params});
  }
}