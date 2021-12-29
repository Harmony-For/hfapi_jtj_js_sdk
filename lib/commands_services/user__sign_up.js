import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"email":null,"password":null,"phone_num":null,"home_country_id":null,"first_name":null,"last_name":null,"latest_school_department_category_id":null,"graduate_latest_school_at":null,"agree_policy_at":null,"password_confirmation":null,"page_language_id":null,"user_analytics_datum":{"first_campaign_name":null,"first_campaign_source":null,"first_campaign_term":null,"first_campaign_medium":null,"first_campaign_content":null,"first_campaign_cretaed_at":null,"first_landing_page":null,"sign_up_campaign_name":null,"sign_up_campaign_source":null,"sign_up_campaign_term":null,"sign_up_campaign_medium":null,"sign_up_campaign_content":null,"sign_up_campaign_cretaed_at":null,"sign_up_landing_page":null},"user_language_skills":[{"id":null,"language_id":null,"speaking_level_id":null,"listening_level_id":null,"writing_level_id":null,"reading_level_id":null,"_destroy":null}],"user_universities":[{"id":null,"university_id":null,"university_academic_degree_id":null,"university_student_category_id":null,"study_department_category_id":null,"graduate_at":null,"enroll_at":null,"is_latest":null,"is_main_bachelor":null,"_destroy":null,"university":{"id":null,"local_name":null,"country_id":null,"english_name":null,"world_ranking":null,"is_created_by_user":null,"_destroy":null}}],"user_schools":[{"id":null,"school_category_id":null,"school_name":null,"country_id":null,"graduate_at":null,"enroll_at":null,"is_latest":null,"_destroy":null}]},"referral_token":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__sign_up", {params: params});
  }
}