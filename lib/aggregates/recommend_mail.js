import Query from "../../lib/queries_services/aggregates__recommend_mail.js"
import BaseAggregate from "../base_aggregate.js"

class RecommendMail extends BaseAggregate {

  container_hash(){
    return {"id":null,"hf_member_id":null,"recommend_mail_type":null,"is_including_meeting_schedule":null,"sent_recommend_at":null,"remind_mail_recruitments":[{"id":null,"recruitment_id":null,"reason_ja":null,"reason_en":null}]}
  }

  query(){
    return Query
  }

}

export default RecommendMail