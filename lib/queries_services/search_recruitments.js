import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"study_department_category_ids_any":null,"prefecture_ids_any":null,"related_country_ids_any":null,"japanese_level_gteq":null,"is_available_from_overseas_true":null},"user_id":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/search_recruitments", {params: params});
  }
}