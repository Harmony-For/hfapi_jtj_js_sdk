import Query from "../../lib/queries_services/aggregates__application.js"
import BaseAggregate from "../base_aggregate.js"

class Application extends BaseAggregate {

  container_hash(){
    return {"state":null}
  }

  query(){
    return Query
  }

}

export default Application