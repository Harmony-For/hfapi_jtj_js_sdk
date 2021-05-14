import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"application":{"id":null,"latest_interview":{"conduct_at":null,"is_online":null,"place":null,"google_map_url":null,"online_link":null}}}
  }

  defined_params(){
    return {"application":{"type":"Object","params":{"id":{"type":"Integer"},"latest_interview":{"type":"Object","params":{"conduct_at":{"type":"DateTime"},"is_online":{"type":"TrueClass"},"place":{"type":"String"},"google_map_url":{"type":"String"},"online_link":{"type":"String"}}}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_interview_details", {params: params});
  }
}