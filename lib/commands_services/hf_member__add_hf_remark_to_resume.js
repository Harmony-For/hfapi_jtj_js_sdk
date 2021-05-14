import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null,"resume":{"hf_remark":null}}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"},"resume":{"type":"Object","params":{"hf_remark":{"type":"String"}}}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__add_hf_remark_to_resume", {params: params});
  }
}