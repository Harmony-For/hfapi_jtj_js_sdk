import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"page_view":{"visit_at":null,"path":null,"google_analytics_client_id":null,"latest_campaign_name":null,"latest_campaign_source":null,"latest_campaign_term":null,"latest_campaign_medium":null,"latest_campaign_content":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/count_visit_page_view", {params: params});
  }
}