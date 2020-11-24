import Query from "../../lib/queries_services/aggregates__event.js"
import BaseAggregate from "../base_aggregate.js"

class Event extends BaseAggregate {

  container_hash(){
    return {"id":null,"title":{"ja":null,"en":null},"title_text":null,"body":{"ja":null,"en":null},"body_text":null,"start_at":null,"apply_url":null,"thumbnail_url":null}
  }

  query(){
    return Query
  }

}

export default Event