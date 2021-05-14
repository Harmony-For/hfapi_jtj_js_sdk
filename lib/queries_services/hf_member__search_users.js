import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"q":{"id_eq_any":null,"hf_member_id_eq_any":null,"only_active":null}}
  }

  defined_params(){
    return {"q":{"type":"Object","params":{"id_eq_any":{"type":"[Integer]"},"hf_member_id_eq_any":{"type":"[Integer]"},"only_active":{"type":"TrueClass"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/hf_member__search_users", {params: params});
  }
}