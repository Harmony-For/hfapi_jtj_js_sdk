import Query from "../../lib/queries_services/aggregates__resume_question.js"
import BaseAggregate from "../base_aggregate.js"

class ResumeQuestion extends BaseAggregate {

  container_hash(){
    return {"id":null,"title_for_hf_member":null,"title":{"ja":null,"en":null},"title_text":null,"purpose":{"ja":null,"en":null},"purpose_text":null,"explanation":{"ja":null,"en":null},"explanation_text":null,"default_template_id":null,"is_allow_reuse":false,"resume_question_templates":[{"template_name":{"ja":null,"en":null},"template_name_text":null,"template_text":null}]}
  }

  query(){
    return Query
  }

}

export default ResumeQuestion