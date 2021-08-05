import Query from "../../lib/queries_services/aggregates__resume_question.js"
import BaseAggregate from "../base_aggregate.js"

class ResumeQuestion extends BaseAggregate {

  container_hash(){
    return {"id":null,"title_for_hf_member":null,"title_id":null,"purpose_id":null,"explanation_id":null,"default_template_id":null,"is_allow_reuse":false}
  }

  query(){
    return Query
  }

}

export default ResumeQuestion