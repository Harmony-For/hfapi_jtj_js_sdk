import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"user_id_eq_any":null,"hf_member_id_eq_any":null,"recruitment_id_eq_any":null}}
  }

  defined_params(){
    return {"q":{"type":"Object","params":{"user_id_eq_any":{"type":"[Integer]"},"hf_member_id_eq_any":{"type":"[Integer]"},"recruitment_id_eq_any":{"type":"[Integer]"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__search_applications", {params: params});
  }
}