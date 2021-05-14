import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"hf_member":{"email":null,"phone_num":null,"first_name_ja":null,"last_name_ja":null,"first_name_en":null,"last_name_en":null,"nick_name_ja":null,"nick_name_en":null,"is_manager_of_applications":null,"trello_id":null,"available_times_google_calendar_id":null,"password":null}}
  }

  defined_params(){
    return {"hf_member":{"type":"Object","params":{"email":{"type":"String"},"phone_num":{"type":"String"},"first_name_ja":{"type":"String"},"last_name_ja":{"type":"String"},"first_name_en":{"type":"String"},"last_name_en":{"type":"String"},"nick_name_ja":{"type":"String"},"nick_name_en":{"type":"String"},"is_manager_of_applications":{"type":"TrueClass"},"trello_id":{"type":"String"},"available_times_google_calendar_id":{"type":"String"},"password":{"type":"Method"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_hf_member", {params: params});
  }
}