import Query from "../../lib/queries_services/aggregates__course.js"
import BaseAggregate from "../base_aggregate.js"

class Course extends BaseAggregate {

  container_hash(){
    return {"id":null,"title":{"ja":null,"en":null},"title_text":null,"description":{"ja":null,"en":null},"description_text":null,"lessons":[{"id":null,"title":{"ja":null,"en":null},"title_text":null}]}
  }

  query(){
    return Query
  }

}

export default Course