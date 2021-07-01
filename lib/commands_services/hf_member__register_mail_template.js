import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"mail_template":{"id":null,"mail_template_group_id":null,"name":null,"template_subject":null,"template_body":null,"mail_template_required_source_objects":[{"id":null,"name_in_template":null,"_destroy":null,"source_object_type":{"id":null,"is_multiple":null,"object_name_for_system":null,"object_name_for_hf_member":null,"_destroy":null}}]}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_mail_template", {params: params});
  }
}