import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"page_view":{"visit_at":null,"path":null,"google_analytics_client_id":null,"latest_campaign_name":null,"latest_campaign_source":null,"latest_campaign_term":null,"latest_campaign_medium":null,"latest_campaign_content":null}}
  }

  defined_params(){
    return {"page_view":{"type":"Object","params":{"visit_at":{"type":"DateTime"},"path":{"type":"String"},"google_analytics_client_id":{"type":"String"},"latest_campaign_name":{"type":"String"},"latest_campaign_source":{"type":"String"},"latest_campaign_term":{"type":"String"},"latest_campaign_medium":{"type":"String"},"latest_campaign_content":{"type":"String"}}}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/count_visit_page_view", {params: params});
  }
}