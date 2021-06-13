import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"hf_member":{"email":null,"phone_num":null,"first_name_ja":null,"last_name_ja":null,"first_name_en":null,"last_name_en":null,"nick_name_ja":null,"nick_name_en":null,"is_manager_of_applications":false,"trello_id":null,"available_times_google_calendar_id":null,"password":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_hf_member", {params: params});
  }
}