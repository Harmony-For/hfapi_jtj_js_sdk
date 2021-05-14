import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null,"sent_resume_to_company_at":null}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"},"sent_resume_to_company_at":{"type":"DateTime"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__set_application_sent_resume_to_company_at", {params: params});
  }
}