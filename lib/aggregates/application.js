import Query from "../../lib/queries_services/aggregates__application.js"
import BaseAggregate from "../base_aggregate.js"

class Application extends BaseAggregate {

  container_hash(){
    return {"resume":{"hf_remark":null,"self_pr":null,"skill_pr":null,"why_select_company":null,"why_select_career":null,"why_good_at_job":null,"about_special_skill":null,"self_pr_jt":null,"skill_pr_jt":null,"why_select_company_jt":null,"why_select_career_jt":null,"why_good_at_job_jt":null,"about_special_skill_jt":null},"state":null,"user_id":null,"recruitment_id":null,"id":null}
  }

  query(){
    return Query
  }

}

export default Application