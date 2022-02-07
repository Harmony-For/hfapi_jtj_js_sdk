import Query from "../../lib/queries_services/aggregates__article.js"
import BaseAggregate from "../base_aggregate.js"

class Article extends BaseAggregate {

  container_hash(){
    return {"after_signup_content":{"ja":null,"en":null},"after_signup_content_text":null,"id":null,"title":{"ja":null,"en":null},"title_text":null,"content":{"ja":null,"en":null},"content_text":null,"publish_at":null,"is_hidden":false,"call_to_action":{"ja":null,"en":null},"call_to_action_text":null,"has_after_signup_contents":null}
  }

  query(){
    return Query
  }

}

export default Article