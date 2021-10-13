import Query from "../../lib/queries_services/aggregates__mail_template.js"
import BaseAggregate from "../base_aggregate.js"

class MailTemplate extends BaseAggregate {

  container_hash(){
    return {"id":null,"mail_template_group_id":null,"name":null,"template_subject":null,"template_body":null}
  }

  query(){
    return Query
  }

}

export default MailTemplate