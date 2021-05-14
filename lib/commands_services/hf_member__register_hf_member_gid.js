import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"gid":{"gid":null,"hf_member_name":null}}
  }

  defined_params(){
    return {"gid":{"type":"Object","params":{"gid":{"type":"String"},"hf_member_name":{"type":"String"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_hf_member_gid", {params: params});
  }
}