import Query from "../../lib/queries_services/aggregates__mail_template.js"
import BaseAggregate from "../base_aggregate.js"

class MailTemplate extends BaseAggregate {

  container_hash(){
    return {"id":null,"mail_template_group_id":null,"name":null,"template_subject":null,"template_body":null,"mail_template_group":{"id":null,"name":null,"to":null},"mail_template_required_source_objects":[{"id":null,"name_in_template":null,"source_object_type":{"id":null,"is_multiple":false,"object_name_for_system":null,"object_name_for_hf_member":null}}]}
  }

  query(){
    return Query
  }

}

export default MailTemplate