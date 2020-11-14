import Query from "../../lib/queries_services/aggregates__hf_member.js"
import BaseAggregate from "../base_aggregate.js"

class HfMember extends BaseAggregate {

  container_hash(){
    return {"id":null,"email":null,"phone_num":null,"first_name_ja":null,"last_name_ja":null,"first_name_en":null,"last_name_en":null,"nick_name_ja":null,"nick_name_en":null,"is_manager_of_applications":null,"trello_id":null,"available_times_google_calendar_id":null,"meeting_date_str_ja":null,"meeting_date_str_en":null}
  }

  query(){
    return Query
  }

}

export default HfMember