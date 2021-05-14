import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"hf_member":{"id":null,"hf_member_smtp_setting":{"address":null,"domain":null,"port":null,"user_name":null,"password":null}}}
  }

  defined_params(){
    return {"hf_member":{"type":"Object","params":{"id":{"type":"Integer"},"hf_member_smtp_setting":{"type":"Object","params":{"address":{"type":"String"},"domain":{"type":"String"},"port":{"type":"Integer"},"user_name":{"type":"String"},"password":{"type":"String"}}}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_own_smtp_setting", {params: params});
  }
}