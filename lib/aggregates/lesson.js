import Query from "../../lib/queries_services/aggregates__lesson.js"
import BaseAggregate from "../base_aggregate.js"

class Lesson extends BaseAggregate {

  container_hash(){
    return {"id":null,"title":{"ja":null,"en":null},"title_text":null,"description":{"ja":null,"en":null},"description_text":null,"video_url":null,"index_in_course":null,"previous_lesson":null,"next_lesson":null}
  }

  query(){
    return Query
  }

}

export default Lesson