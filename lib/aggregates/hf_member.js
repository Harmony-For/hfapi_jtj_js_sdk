import Query from "../../lib/queries_services/aggregates__hf_member.js"
import BaseAggregate from "../base_aggregate.js"

class HfMember extends BaseAggregate {

  container_hash(){
    return {"id":null,"last_name_en":null}
  }

  query(){
    return Query
  }

}

export default HfMember