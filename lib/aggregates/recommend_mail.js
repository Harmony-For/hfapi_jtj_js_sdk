import Query from "../../lib/queries_services/aggregates__recommend_mail.js"
import BaseAggregate from "../base_aggregate.js"

class RecommendMail extends BaseAggregate {

  container_hash(){
    return {"id":null,"user_id":null,"hf_member_id":null,"recommend_mail_type":null,"is_including_meeting_schedule":null,"sent_recommend_at":null,"remind_mail_recruitments":[{"id":null,"recruitment_id":null,"reason_ja":null,"reason_en":null,"recruitment":{"recruitment_detail":{"job_description":{"ja":null,"en":null},"job_description_text":null},"company":{"official_name_ja":null,"official_name_en":null,"hf_recommend_sentence":{"ja":null,"en":null},"hf_recommend_sentence_text":null,"appeal_point":{"ja":null,"en":null},"appeal_point_text":null}}}],"hf_member":{"id":null,"email":null,"phone_num":null,"first_name_ja":null,"last_name_ja":null,"first_name_en":null,"last_name_en":null,"nick_name_ja":null,"nick_name_en":null}}
  }

  query(){
    return Query
  }

}

export default RecommendMail