import Query from "../../lib/queries_services/aggregates__article.js"
import BaseAggregate from "../base_aggregate.js"

class Article extends BaseAggregate {

  container_hash(){
    return {"id":null,"title":{"ja":null,"en":null},"title_text":null,"content":{"ja":null,"en":null},"content_text":null,"publish_at":null,"is_hidden":null}
  }

  query(){
    return Query
  }

}

export default Article